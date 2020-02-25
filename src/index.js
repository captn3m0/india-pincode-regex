const readline = require("readline");
const fs = require("fs");

const regexes = fs.readFileSync(__dirname + '/../regex.txt', 'utf8').split("\n")
  // We drop the opening / and ending /u
  .map(function(r) {return new RegExp(r.slice(1, -2));})

module.exports = {
  validate: function(pin) {
    for (let i in regexes) {
      if (regexes[i].test(pin)) {
        return true;
      }
    }
    return false;
  }
};