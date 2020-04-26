# india-pincode-regex ![Packagist Version](https://img.shields.io/packagist/v/captn3m0/pincode?style=plastic) [![Build Status](https://travis-ci.org/captn3m0/india-pincode-regex.svg?branch=master)](https://travis-ci.org/captn3m0/india-pincode-regex) ![npm](https://img.shields.io/npm/v/pincode-validator?style=plastic) ![GitHub package.json version](https://img.shields.io/github/package-json/v/captn3m0/india-pincode-regex?style=plastic) ![GitHub](https://img.shields.io/github/license/captn3m0/india-pincode-regex?style=plastic)

Validate a [Postal Index Number][wiki] for India with a few regexes. The regexes are available in `regex.txt`. There is one regex per area code (the first digit of the PIN, which goes from 1-8).

## Source

The source for the data is the ["All India Pincode Directory"](https://data.gov.in/resources/all-india-pincode-directory) dataset on data.gov.in.

## Usage

The `regex.txt` file is 32KB in size, so you can easily use it wherever you want, including browsers.

### PHP

The package is available on [`packagist`](https://packagist.org/packages/captn3m0/pincode).

To use the PHP package:

```php
use PIN\Validator as P;
P::validate('110011'); // returns true;
```

### Node.js

The package is available on [`npm`](https://www.npmjs.com/package/pincode-validator).

To use the package:

```js
const P = require('pincode-validator');
P.validate('110011'); // returns true
````

## Ruby

Add this line to your application's Gemfile:

```ruby
gem 'pincode_validator'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install pincode_validator

### Browser

To use it in the browser, download the `pincode-regex.js` file and include it in your browser. `Pincode` is available as a Global variable.

```html
<script src="../pincode-regex.js"></script>
<script>
Pincode.validate("560029"); // returns true
</script>
```

Since there is no hotline/CDN for this yet, please watch to repo to get notified of new releases.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/captn3m0/outliner.

## Code of Conduct

Everyone interacting in the this project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/captn3m0/outliner/blob/master/CODE_OF_CONDUCT.md).


## Contributing

- See [`HACKING.md`](HACKING.md) for some development details.
- Pull requests are welcome for adding libraries in other languages (in the same repo).
- This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

Licensed under the [MIT License](https://nemo.mit-license.org/). See LICENSE file for details.

[wiki]: https://en.wikipedia.org/wiki/Postal_Index_Number
