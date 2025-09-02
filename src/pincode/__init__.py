import os
import re

from pathlib import Path
from importlib import resources

f = open('regex.txt')
regex_str = f.read().strip()
regex = re.compile('^' + regex_str.strip() + '$')

class Pincode:
    @staticmethod
    def validate(code):
        if regex.match(code) != None:
            return True
        return False
