const P = require('../src/index');
const assert = require('assert');

// A few correct ones
assert.strictEqual(P.validate('110011'), true, '110011');
assert.strictEqual(P.validate('244713'), true, '244713');
assert.strictEqual(P.validate('560029'), true, '560029');
assert.strictEqual(P.validate('560030'), true, '560030');

// Incorrect
assert.strictEqual(P.validate('address 560030'), false, 'address 560030 should fail');
assert.strictEqual(P.validate('1100111'), false, '1100111');
assert.strictEqual(P.validate('111111'), false, '111111');
assert.strictEqual(P.validate('999999'), false, '999999');
assert.strictEqual(P.validate('99999'), false, '99999');
assert.strictEqual(P.validate('9999'), false, '9999');
assert.strictEqual(P.validate('999'), false, '999');
assert.strictEqual(P.validate('99'), false, '99');
assert.strictEqual(P.validate('9'), false, '9');

// Validate search method
assert.deepEqual(P.search('bangalore 560038 244713'), ['560038', '244713'])
assert.deepEqual(P.search('bangalore 560038'), ['560038'])
assert.deepEqual(P.search('560038 BENGALURU'), ['560038'])
assert.deepEqual(P.search('560038'), ['560038'])
assert.deepEqual(P.search('my pincode is 244713'), ['244713'])
assert.deepEqual(P.search('560029 pin'), ['560029'])

// Validate direct regex exports
assert(P.regex instanceof RegExp)
assert(P.exactRegex instanceof RegExp)

// exact regex only works with 6 digit strings
assert(P.exactRegex.test('560029'))
assert.match('560029', P.exactRegex)
assert.doesNotMatch('111111', P.exactRegex)
assert.doesNotMatch('address is 560029', P.exactRegex)

// Normal regex works with long addresses
assert.match('560029', P.regex)
assert.match('address is 560029', P.regex)
assert.doesNotMatch('address is 111111', P.regex)
assert.doesNotMatch('111111', P.regex)
