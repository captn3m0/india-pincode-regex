# india-pincode-regex ![Packagist Version](https://img.shields.io/packagist/v/captn3m0/pincode?style=plastic) [![Build Status](https://travis-ci.org/captn3m0/india-pincode-regex.svg?branch=master)](https://travis-ci.org/captn3m0/india-pincode-regex) ![npm](https://img.shields.io/npm/v/pincode-validator?style=plastic) ![GitHub package.json version](https://img.shields.io/github/package-json/v/captn3m0/india-pincode-regex?style=plastic) ![GitHub](https://img.shields.io/github/license/captn3m0/india-pincode-regex?style=plastic)

Validate a [Postal Index Number][wiki] for India with a few regexes and zero false-positives. The regexes are available in `regex.txt`. There is one regex per area code (the first digit of the PIN, which goes from 1-8). Available as a package for Ruby, Python, Node.js, and browsers.

## Why?

A simple `\d{6}` approach marks a lot of invalid pincodes as valid. Out of the 900000 possible combinations, only approximately `19000` are valid pincodes in India. A simple example is `111111` which is an invalid pincode, but any simple 6 digit-check will pass it as a valid one.

## Source

The source for the data is the ["All India Pincode Directory"](https://data.gov.in/resources/all-india-pincode-directory) dataset on data.gov.in. The last updated date for the dataset is currently 30th May 2019.

## Usage

The `regex.txt` file is 32KB in size, so you can easily use it wherever you want, including browsers. If you are using any of the packages below, this is already delivered compressed. You can use the regex directly, or via a few helper methods.

### PHP

The package is available on [`packagist`](https://packagist.org/packages/captn3m0/pincode).

To use the PHP package:

```php
use PIN\Validator as P;
// validates a given pincode
// returns boolean
P::validate('110011'); // returns true;

// Searches for all valid pincodes in a given string.
// returns array(string)
P::search('bangalore 560029'); // returns ["560029"]
```

### Node.js

The package is available on [`npm`](https://www.npmjs.com/package/pincode-validator).

To use the package:

```js
const P = require('pincode-validator');
P.validate('110011'); // returns true
P.search('my pincode is 560029'); // returns ['560029']

// or directly use the regex in your code
P.exactRegex.match('560029')
"address with pincode (560029)".matchAll(P.regex)
````

Please see `tests/validate.js` for more examples.

## Ruby

Add this line to your application's Gemfile:

```ruby
gem 'pincode_validator'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install pincode_validator

```ruby
require 'pincode_validator'

Pin::valid?('560029') # returns true
Pin::valid?('111111') # returns false

Pin::search('my pincode is 244713') # returns ['244713']
Pin::search('my pincode is 244713 or 560029') # returns ['244713', '560029']
```

### Browser

To use it in the browser, download the `pincode-regex.js` file and include it in your browser. `Pincode` is available as a Global variable.

```html
<script src="../pincode-regex.js"></script>
<script>
Pincode.validate("560029"); // returns true
</script>
```

You can use githack for directly using this in your code: <https://rawcdn.githack.com/captn3m0/india-pincode-regex/v2.0.0/pincode-regex.js> (Make sure you use the latest version). Please watch the repo to get notified of new releases.

## Code of Conduct

Everyone interacting in the this project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/captn3m0/outliner/blob/master/CODE_OF_CONDUCT.md).

## Contributing

- See [`CONTRIBUTING.md`](CONTRIBUTING.md) for some development details and contribution guidelines
- Pull requests are welcome for adding libraries in other languages (in the same repo). Python support is WIP, and I'd love to have support for other languages as well.
- This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

Licensed under the [MIT License](https://nemo.mit-license.org/). See LICENSE file for details.

[wiki]: https://en.wikipedia.org/wiki/Postal_Index_Number
