#!/usr/bin/env ruby

require "json"
require "pathname"
require "rexml/document"
require "uri"
require "optparse"

options = { release: true }
OptionParser.new do |parser|
  parser.banner = 'Usage: ruby scripts/validate-site-output.rb [--diagnostic] [--cv-source PATH] OUTPUT'
  parser.on('--diagnostic', 'Allow a missing CV only for layout previews') { options[:release] = false }
  parser.on('--cv-source PATH', 'Verify the PDF matches this exact source checkout') { |path| options[:cv_source] = path }
end.parse!

output = Pathname(ARGV.fetch(0, "_site")).expand_path
abort "Output directory does not exist: #{output}" unless output.directory?

errors = []
warnings = []
html_files = output.glob("**/*.html").sort
site_host = "hamzaabdelhedi.com"

def attribute(tag, name)
  quoted = tag.match(/\b#{Regexp.escape(name)}\s*=\s*(["'])(.*?)\1/im)
  quoted && quoted[2]
end

def tags_with_name(html, name)
  html.scan(/<#{Regexp.escape(name)}\b[^>]*>/im)
end

def local_target(output, source_file, url, site_host)
  return [nil, nil, nil] if url.nil? || url.empty?
  return [nil, nil, nil] if url.start_with?("mailto:", "tel:", "javascript:", "data:", "blob:")
  return [nil, nil, nil] if url == "#"

  parsed = URI.parse(url)
  if parsed.host && parsed.host != site_host
    return [nil, nil, nil]
  end
  return [nil, nil, nil] if parsed.scheme && !["http", "https"].include?(parsed.scheme)

  path = URI::DEFAULT_PARSER.unescape(parsed.path.to_s)
  fragment = parsed.fragment && URI::DEFAULT_PARSER.unescape(parsed.fragment)
  if path.empty?
    target = source_file
  else
    relative = if path.start_with?("/")
      Pathname(path.sub(%r{\A/}, ""))
    else
      source_file.relative_path_from(output).dirname.join(path)
    end
    relative_string = relative.cleanpath.to_s
    candidates = [output.join(relative_string)]
    candidates << output.join(relative_string, "index.html") unless relative_string.end_with?("/index.html")
    candidates << output.join("#{relative_string}.html") unless relative_string.end_with?(".html")
    target = candidates.find(&:file?)
  end

  [target, fragment, parsed]
end

def fragment_present?(file, fragment)
  return true if fragment.nil? || fragment.empty?
  html = File.read(file)
  escaped = Regexp.escape(fragment)
  html.match?(/\b(?:id|name)\s*=\s*["']#{escaped}["']/i)
end

def canonical_count(tags)
  tags.count { |tag| attribute(tag, "rel").to_s.split.any? { |value| value.casecmp("canonical").zero? } }
end

required_routes = [
  "index.html",
  "about/index.html",
  "contact/index.html",
  "publications/index.html",
  "research/index.html",
  "software/index.html",
  "updates/index.html",
  "teaching/index.html",
  "community/index.html",
  "presentations/index.html",
  "awards/index.html",
  "CNAME",
  "robots.txt",
  "sitemap.xml",
]
required_routes.each do |route|
  errors << "missing required output: #{route}" unless output.join(route).file?
end

expected_projects = %w[
  dynamic-decision-making
  eeg-meg-foundation-models
  face-familiarity
  pediatric-clinical-eeg
]
expected_projects.each do |slug|
  route = "project/#{slug}.html"
  errors << "missing project route: #{route}" unless output.join(route).file?
end

errors << "editor schema artifacts are public: schemas/" if output.join("schemas").exist?
errors << "build log is public: build_log.txt" if output.join("build_log.txt").exist?

canonical_pdf = output.join("assets/files/Hamza_Abdelhedi_CV.pdf")
if canonical_pdf.file?
  command = ['python3', File.expand_path('cv-artifact.py', __dir__), 'verify', output.to_s]
  command += ['--source', options[:cv_source]] if options[:cv_source]
  errors << 'CV artifact verification failed' unless system(*command)
elsif options[:release]
  errors << 'canonical CV PDF is missing; run scripts/build-cv.sh before release'
else
  warnings << 'canonical CV PDF is missing (diagnostic mode; not release-ready)'
end

leaked_sources = output.glob('**/*').select { |path| path.file? && path.to_s.match?(/\.(tex|aux|fls|fdb_latexmk|log)\z/) }
errors << 'CV/build sources leaked into public output' unless leaked_sources.empty?

html_files.each do |file|
  html = File.read(file)
  relative_file = file.relative_path_from(output).to_s

  errors << "unrendered Liquid in #{relative_file}" if html.include?("{{") || html.include?("{%")
  errors << "invalid placeholder anchor in #{relative_file}" if html.match?(/href\s*=\s*["']#["']/i)
  errors << "inline onclick handler in #{relative_file}" if html.match?(/\bonclick\s*=/i)

  h1_count = html.scan(/<h1\b/i).length
  errors << "expected exactly one h1 in #{relative_file}, found #{h1_count}" unless h1_count == 1

  title_count = html.scan(/<title\b/i).length
  meta_tags = tags_with_name(html, "meta")
  description_tags = meta_tags.select { |tag| attribute(tag, "name").to_s.casecmp("description").zero? }
  link_tags = tags_with_name(html, "link")
  og_tags = {
    "og:title" => meta_tags.select { |tag| attribute(tag, "property").to_s.casecmp("og:title").zero? },
    "og:description" => meta_tags.select { |tag| attribute(tag, "property").to_s.casecmp("og:description").zero? },
    "og:url" => meta_tags.select { |tag| attribute(tag, "property").to_s.casecmp("og:url").zero? },
    "og:image" => meta_tags.select { |tag| attribute(tag, "property").to_s.casecmp("og:image").zero? }
  }
  json_ld = html.scan(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>(.*?)<\/script>/im).flatten

  errors << "expected one title in #{relative_file}, found #{title_count}" unless title_count == 1
  errors << "expected one description in #{relative_file}, found #{description_tags.length}" unless description_tags.length == 1 && !attribute(description_tags.first, "content").to_s.empty?
  errors << "expected one canonical in #{relative_file}, found #{canonical_count(link_tags)}" unless canonical_count(link_tags) == 1
  og_tags.each do |label, tags|
    errors << "expected one #{label} in #{relative_file}, found #{tags.length}" unless tags.length == 1 && !attribute(tags.first, "content").to_s.empty?
  end

  if json_ld.length != 1
    errors << "expected one JSON-LD block in #{relative_file}, found #{json_ld.length}"
  else
    begin
      parsed_json = JSON.parse(json_ld.first)
      errors << "JSON-LD is not a Person in #{relative_file}" unless parsed_json["@type"] == "Person"
    rescue JSON::ParserError => error
      errors << "invalid JSON-LD in #{relative_file}: #{error.message}"
    end
  end

  tags_with_name(html, "a").each do |tag|
    url = attribute(tag, "href")
    next if url.nil? || url.empty?
    if url == "/assets/files/Hamza_Abdelhedi_CV.pdf" && !canonical_pdf.file?
      next
    end
    target, fragment, parsed = local_target(output, file, url, site_host)
    next if target.nil? && parsed.nil?
    if target.nil?
      errors << "missing internal link #{url.inspect} from #{relative_file}"
    elsif fragment && !fragment_present?(target, fragment)
      errors << "missing fragment ##{fragment} in #{target.relative_path_from(output)} (linked from #{relative_file})"
    end
  end

  tags_with_name(html, "img").each do |tag|
    url = attribute(tag, "src")
    next if url.nil? || url.empty?
    target, = local_target(output, file, url, site_host)
    errors << "missing image #{url.inspect} from #{relative_file}" if target.nil? && !url.match?(%r{\Ahttps?://})
  end

  tags_with_name(html, "script").each do |tag|
    url = attribute(tag, "src")
    next if url.nil? || url.empty?
    target, = local_target(output, file, url, site_host)
    errors << "missing script #{url.inspect} from #{relative_file}" if target.nil? && !url.match?(%r{\Ahttps?://})
  end
end

begin
  sitemap = REXML::Document.new(File.read(output.join("sitemap.xml")))
  locations = sitemap.get_elements("//*[local-name()='loc']").map(&:text)
  errors << "sitemap has no URLs" if locations.empty?
  locations.each do |location|
    parsed = URI.parse(location)
    errors << "sitemap URL is outside primary domain: #{location}" unless parsed.host == site_host
    next if !options[:release] && !canonical_pdf.file? && parsed.path == '/assets/files/Hamza_Abdelhedi_CV.pdf'
    target, = local_target(output, output.join("index.html"), location, site_host)
    errors << "sitemap target is not generated: #{location}" if target.nil?
  end
rescue StandardError => error
  errors << "could not parse sitemap.xml: #{error.message}"
end

errors.uniq.sort.each { |error| warn "ERROR: #{error}" }
warnings.uniq.sort.each { |warning| warn "WARNING: #{warning}" }

puts "Validated #{html_files.length} HTML files and #{html_files.sum { |file| File.size(file) }} HTML bytes."
puts "Internal route and asset crawl: #{errors.empty? ? 'PASS' : 'FAIL'}"
puts "Metadata and JSON-LD checks: #{errors.empty? ? 'PASS' : 'FAIL'}"
puts "Warnings: #{warnings.uniq.length}"
exit(errors.empty? ? 0 : 1)
