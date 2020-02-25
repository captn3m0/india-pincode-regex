const pincode = require('../src/index');
const assert = require('assert');

assert.strictEqual(true, pincode.validate('110011'));
assert.strictEqual(true, pincode.validate('244713'));
assert.strictEqual(true, pincode.validate('560029'));
assert.strictEqual(true, pincode.validate('560030'));
assert.strictEqual(false, pincode.validate('111111'));
assert.strictEqual(false, pincode.validate('999999'));
assert.strictEqual(false, pincode.validate('99999'));
assert.strictEqual(false, pincode.validate('9999'));
assert.strictEqual(false, pincode.validate('999'));
assert.strictEqual(false, pincode.validate('99'));
assert.strictEqual(false, pincode.validate('9'));