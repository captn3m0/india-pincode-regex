from pincode import Pincode
from nose.tools import assert_equals

def test_valid_pincodes():
    VALID_PINS = ['244713', '560029', '560030', '110011']
    for pin in VALID_PINS:
        assert_equals(True, Pincode.validate(pin), pin + " should be valid")

def test_invalid_pincodes():
    INVALID_PINS = ['999999', '99999', '9999', '999', '99', '9', '111111', '2447131'];
    for pin in INVALID_PINS:
        assert_equals(False, Pincode.validate(pin), pin + " should be invalid")
