# Generating the regex

1. Download the latest CSV file from <https://data.gov.in/node/85839/download> or <https://data.gov.in/resources/all-india-pincode-directory>.
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
