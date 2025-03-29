const http = require("http");
const server = http.createServer((request, response) => {
  response.write("hello world");
  response.end();
});
server.listen(3000);
