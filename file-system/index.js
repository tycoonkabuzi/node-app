const fs = require("fs");

fs.writeFile("message.txt", "Welcome", function () {
  console.log("registered");
});
