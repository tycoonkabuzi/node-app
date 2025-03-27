const fs = require("fs");
console.log(fs);
fs.writeFile("message.txt", "Welcome", function () {
  console.log("registered");
});
