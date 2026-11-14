import os
import sys
import subprocess
import tempfile

from pincode import Pincode

def test_valid_pincodes():
    VALID_PINS = ['244713', '560029', '560030', '110011', '121999', '123304']
    for pin in VALID_PINS:
        assert Pincode.validate(pin) == True, f"{pin} should be valid"

def test_invalid_pincodes():
    INVALID_PINS = ['999999', '99999', '9999', '999', '99', '9', '111111', '2447131', '143003', '323306', '900056', '900099'];
    for pin in INVALID_PINS:
        assert Pincode.validate(pin) == False, f"{pin} should be invalid"

def _validate_from_cwd(workdir, decoy=False):
    import pincode
    pkg_parent = os.path.dirname(os.path.dirname(os.path.abspath(pincode.__file__)))
    if decoy:
        with open(os.path.join(workdir, 'regex.txt'), 'w') as fh:
            fh.write('zzz')
    child = "from pincode import Pincode; import sys; sys.exit(0 if Pincode.validate('110001') and not Pincode.validate('zzz') else 3)"
    env = dict(os.environ, PYTHONPATH=pkg_parent)
    return subprocess.run([sys.executable, '-c', child], cwd=workdir, env=env, capture_output=True, text=True)

# regex data must load from the package, never the process CWD (issue #2)
def test_import_from_foreign_cwd():
    with tempfile.TemporaryDirectory() as d:
        r = _validate_from_cwd(d)
        assert r.returncode == 0, f"import failed from a cwd without regex.txt: {r.stderr}"

def test_ignores_decoy_regex_in_cwd():
    with tempfile.TemporaryDirectory() as d:
        r = _validate_from_cwd(d, decoy=True)
        assert r.returncode == 0, f"validator read an unrelated regex.txt from cwd: {r.stderr}"
