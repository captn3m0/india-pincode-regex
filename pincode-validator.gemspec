require_relative 'src/pincode_validator'

Gem::Specification.new do |spec|
  spec.name          = "pincode_validator"
  spec.version       = PincodeValidator::VERSION
  spec.authors       = ["Nemo"]
  spec.email         = ["rubygems@captnemo.in"]

  spec.summary       = %q{A simple regex based offline validator for PIN codes in India}
  spec.homepage      = "https://github.com/captn3m0/india-pincode-regex"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.5.0")

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/captn3m0/india-pincode-regex"

  spec.files         = [
    'Gemfile',
    'LICENSE',
    'pincode-validator.gemspec',
    'README.md',
    'regex.txt',
    'src/pincode_validator.rb',
  ]

  spec.license = 'MIT'
  spec.require_paths = ["src"]
  spec.add_development_dependency 'rake', '~> 13.0'
  spec.add_development_dependency 'rspec', '~> 3.12'
end
