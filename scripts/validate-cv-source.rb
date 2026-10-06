#!/usr/bin/env ruby
require 'yaml'
require 'pathname'

source = Pathname(ARGV.fetch(0, '_cv-src'))
awards = YAML.safe_load_file(File.expand_path('../site/_data/recognition.yml', __dir__))
expected = awards.find { |award| award['id'] == 'medicine-merit' }.fetch('amount')
tex = source.join('awards.tex').read
entry = tex.split('\\newcommand{\\awardFacultyMedicine}', 2).last&.split('\\newcommand', 2)&.first
actual = entry&.match(/C\\\$([\d,]+\/year)/)&.captures&.first
expected_amount = expected[/[\d,]+\/year/]
abort "CV Faculty of Medicine amount must match website: #{expected}; found #{actual.inspect}. Correct the canonical CV source before release." unless actual && actual == expected_amount
puts "CV scholarship consistency: PASS (C$#{actual})"
