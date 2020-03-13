const fs = require("fs");
const readline = require("readline");
const { Trie } = require("regexgen");

if (!process.argv[2]) {
  console.error("Please pass pincode filename (unique only) as argument");
  process.exit(1);
}

const readInterface = readline.createInterface({
  input: fs.createReadStream(process.argv[2]),
  console: false
});

regexes = [];

for (var i = 0; i < 8; i++) {
  regexes.push(new Trie());
}

readInterface.on("line", function(line) {
  if (line.length === 6) {
    // First character of the PIN
    let areaCode = parseInt(line.charAt(0), 10);
    let areaCodeIndex = areaCode - 1;
    regexes[areaCodeIndex].add(line);
  }
});

readInterface.on("close", function() {
  for(i in regexes) {
    console.log(regexes[i].toRegExp());
  }
});
