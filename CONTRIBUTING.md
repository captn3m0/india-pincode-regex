# Contribution Guidelines

## Generating the regex

1. Download the latest CSV file from <https://data.gov.in/resources/all-india-pincode-directory-till-last-month>.
2. Copy all the pincodes to a pincodes.csv file
3. Generate all unique pincodes by running `npm run build`

## Regex Notes

Note that the regexes are all PCRE compatible, but do not include `/` at the beginning or end. This is for cross-compatibility and ease of use.
The two files are:

- `regex.txt` - This is the regex for validating a pincode. It is a single regex.
- `regexes.txt` - It is a list of regexes, one per line. One regex is available per area code (the first digit of the PIN, which goes from 1-8).

## Generating the browser-version

1. Make sure development dependencies are installed.
2. `npm run browserify`.
3. Test it by opening `tests/index.html` in your browser.

# PHP Release

1. `git tag v1.2.3`
2. `git push --tags`

## Ruby Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

Run `gem build pincode-validator.gemspec` to build the gem, and `tar --to-stdout -xf *.gem data.tar.gz | tar -zt` to validate the list of files inside the gem before publishing it.

## Code of Conduct

Please see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the code of conduct.
