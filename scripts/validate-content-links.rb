#!/usr/bin/env ruby
# Validate author-maintained references before building Jekyll.
require 'yaml'
require 'date'
require 'pathname'

root = Pathname(__dir__).parent.join('site')
records = {}
errors = []
load_yaml = ->(text) { YAML.safe_load(text, permitted_classes: [Date, Time], aliases: false) }
{
  'update' => 'updates', 'awards' => 'recognition', 'teaching' => 'teaching',
  'mentoring' => 'mentoring', 'community' => 'community',
  'presentations' => 'presentations', 'software' => 'software'
}.each do |kind, file|
  load_yaml.call(root.join('_data', "#{file}.yml").read).each do |record|
    key = "#{kind}:#{record['id']}"
    errors << "Missing or duplicate ID: #{key}" if record['id'].to_s.empty? || records.key?(key)
    records[key] = record
  end
end
{ 'research' => '_projects', 'publication' => '_publications' }.each do |kind, folder|
  root.join('collections', folder).children.select(&:file?).each do |file|
    record = load_yaml.call(file.read.split('---', 3)[1])
    slug = record.fetch('slug', file.basename(file.extname).to_s)
    records["#{kind}:#{slug}"] = record
  end
end
pairs = []
edges = load_yaml.call(root.join('_data/connections.yml').read)
edges.each do |edge|
  %w[from to].each { |key| errors << "Unknown reference: #{edge[key]}" unless records.key?(edge[key]) }
  %w[forward reverse].each { |key| errors << "Missing label: #{edge}" if edge[key].to_s.empty? }
  pair = [edge['from'], edge['to']].sort
  errors << "Duplicate or self connection: #{pair}" if pairs.include?(pair) || pair.uniq.size != 2
  pairs << pair
end
records.each do |key, record|
  next unless key.start_with?('update:')
  %w[title description category date].each { |field| errors << "Missing #{field}: #{key}" if record[field].to_s.empty? }
  if record['resources_from'] && !records.key?(record['resources_from'])
    errors << "Unknown resource owner: #{key} -> #{record['resources_from']}"
  end
end
root.join('collections/_posts').children.select(&:file?).each do |file|
  record = load_yaml.call(file.read.split('---', 3)[1])
  next unless record['update_id']
  errors << "Unknown story update: #{file}" unless records.key?("update:#{record['update_id']}")
end
abort errors.join("\n") unless errors.empty?
puts "Content references: PASS (#{edges.size} bidirectional connections, #{records.size} records)"
