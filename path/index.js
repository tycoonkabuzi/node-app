const path = require("path");
const filename = path.basename(__dirname + "/tmp/index.html");
const filenameNoEdt = path.basename(__dirname + "/tmp/index.html", ".html");
console.log(filename);
console.log(filenameNoEdt);

const dirname = path.dirname(__dirname + "/tmp/index.html");
console.log(dirname);
const ext = path.extname("/tmp/index.html");
console.log(ext);
const patseFile = path.parse(__dirname + "/tmp/index.html");
console.log(patseFile);
