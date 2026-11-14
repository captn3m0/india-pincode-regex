import re

from importlib import resources

regex_str = (resources.files('pincode') / 'regex.txt').read_text().strip()
regex = re.compile('^' + regex_str + '$')

class Pincode:
    @staticmethod
    def validate(code):
        if regex.match(code) != None:
            return True
        return False
