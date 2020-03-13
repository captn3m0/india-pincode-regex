const pincode = require('../src/index');
const assert = require('assert');

// A few correct ones

assert.strictEqual(pincode.validate('110011'), true, '110011');
assert.strictEqual(pincode.validate('244713'), true, '244713');
assert.strictEqual(pincode.validate('560029'), true, '560029');
assert.strictEqual(pincode.validate('560030'), true, '560030');

// Incorrect
assert.strictEqual(pincode.validate('111111'), false, '111111');
assert.strictEqual(pincode.validate('999999'), false, '999999');
assert.strictEqual(pincode.validate('99999'), false, '99999');
assert.strictEqual(pincode.validate('9999'), false, '9999');
assert.strictEqual(pincode.validate('999'), false, '999');
assert.strictEqual(pincode.validate('99'), false, '99');
assert.strictEqual(pincode.validate('9'), false, '9');
