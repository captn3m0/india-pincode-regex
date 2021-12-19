# Generating the regex

1. Download the latest CSV file from <https://data.gov.in/resources/all-india-pincode-directory-till-last-month>.
2. Copy all the pincodes to a pincodes.txt file
3. Generate all unique pincodes by running `sort -u pincodes.txt > /tmp/pin.txt`
4. `npm install`
5. `node src/generate.js /tmp/pin.txt > regex.txt`

# Generating the browser-version

1. Make sure development dependencies are installed.
2. `npm run browserify`.
3. Test it by opening `tests/index.html` in your browser.

# PHP Release

1. `git tag 1.2.3`
2. `git push --tags`


## Ruby Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).
