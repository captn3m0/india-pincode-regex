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

let t1 = new Trie(),
  t2 = new Trie();

readInterface.on("line", function(line) {
  if (line.length === 6) {
    if (['1', '2', '3', '4'].includes(line.charAt(0))) {
      t1.add(line);
    } else {
      t2.add(line)
    }
  }
});

readInterface.on("close", function() {
  console.log(t1.toRegExp("u"));
  console.log(t2.toRegExp("u"));
});