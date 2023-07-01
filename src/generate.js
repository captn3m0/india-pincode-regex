const fs = require("fs");
const readline = require("readline");
const { Trie } = require("regexgen");

if (!process.argv[2]) {
  console.error("Please pass pincode filename (unique only) as argument");
  process.exit(1);
}

const readInterface = readline.createInterface({
  input: fs.createReadStream(process.argv[2]),
  console: false,
});

regexes = [];

// There are 3 Pincodes that start with 9, but we
// ignore those as test offices.
for (var i = 0; i < 8; i++) {
  regexes.push(new Trie());
}

readInterface.on("line", function (line) {
  if (line.length === 6) {
    // First character of the PIN
    let areaCode = parseInt(line.charAt(0), 10);
    if (areaCode < 9 && areaCode > 0) {
      let areaCodeIndex = areaCode - 1;
      regexes[areaCodeIndex].add(line.trim());
    }
  }
});

readInterface.on("close", function () {
  console.log("(" + regexes.join('|') + ")");
});
