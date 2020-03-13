const readline = require("readline");
const fs = require("fs");

const regexes = fs
  .readFileSync(__dirname + "/../regex.txt", "utf8")
  .split("\n")
  // Remove empty lines
  .filter(function(r) {
    return r.length > 1;
  })
  // Remove the opening and closing slashes
  .map(function(r) {
    return new RegExp("^" + r.slice(1, -1) + "$");
  });

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
