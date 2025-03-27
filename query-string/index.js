const querystring = require("querystring");
const band = querystring.parse(
  "name=beatles&members=john&members=paul&members=tycoon"
);
// console.log(band);
// we cam do it in the other way arround. instead of parse we stringify

let user = { username: "Tycoon", password: "45643" };
const strigifiedFromObject = querystring.stringify(user);
console.log(strigifiedFromObject);
