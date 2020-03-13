import re

regex = list()
f = open('regex.txt')
lines = f.readlines()
for line in lines:
    if (len(line) > 10):
        # Remove the \n at the end
        regex.append(re.compile(line[1:-2]))

class Pincode:
    @staticmethod
    def validate(code):
        for r in regex:
            if r.match(code) != None:
                return True
        return False
