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

## Contributing

- See [`HACKING.md`](HACKING.md) for some development details.
- Pull requests are welcome for adding libraries in other languages (in the same repo).

## License

Licensed under the [MIT License](https://nemo.mit-license.org/). See LICENSE file for details.

[wiki]: https://en.wikipedia.org/wiki/Postal_Index_Number
