const querystring = require("querystring");
const band = querystring.parse(
  "name=beatles&members=john&members=paul&members=tycoon"
);
console.log(band);
