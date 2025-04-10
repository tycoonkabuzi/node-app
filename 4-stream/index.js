const fs = require("fs");
const EventEmitter = require("events");
const readLine = require("readline");
class LineReader extends EventEmitter {
  constructor(fileToBeRead) {
    super();
    let lineNumber = 0;

    const readStream = fs.createReadStream(fileToBeRead, {
      encoding: "utf8",
      highWaterMark: 1024 * 16,
    });

    const rl = readLine.createInterface({
      input: readStream,
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      lineNumber++;
      console.log(`Line ${lineNumber}: ${line}`);
    });

    readStream.on("end", () => {
      console.log("We are at the end Everything was consumed ");
    });
  }
}
const theLine = new LineReader("./data/large_user_data.txt");

theLine.emit("line");
theLine.emit("end");
