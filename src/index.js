const readline = require("readline");
const fs = require("fs");

let contents = fs.readFileSync(__dirname + "/../regex.txt", "utf8").trim()
const regex = new RegExp(contents, "gm");
const exactRegex = new RegExp("^" + contents + "$");

module.exports = {
  // Validates an exact 6 digit string as a valid pincode
  validate: function(pin) {
    if (exactRegex.test(pin)) {
      return true;
    }
    return false;
  },
  // Returns all valid PIN codes for a given address
  search: function(address) {
    return Array.from(address.matchAll(regex), (x) => x[0])
  },
  regex: regex,
  exactRegex: exactRegex
};
