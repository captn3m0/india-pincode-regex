from pincode import Pincode

def test_valid_pincodes():
    VALID_PINS = ['244713', '560029', '560030', '110011', '121999', '123304']
    for pin in VALID_PINS:
        assert Pincode.validate(pin) == True, f"{pin} should be valid"

def test_invalid_pincodes():
    INVALID_PINS = ['999999', '99999', '9999', '999', '99', '9', '111111', '2447131', '143003', '323306', '900056', '900099'];
    for pin in INVALID_PINS:
        assert Pincode.validate(pin) == False, f"{pin} should be invalid"
