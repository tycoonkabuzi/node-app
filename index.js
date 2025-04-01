// // let firstname = "Tycoon";
// // let surname = "Badocha";
// // console.log(`My name is ${firstname} ${surname}`);
// // const math = require("./Module/math");
// // console.log(math.multiply(1, 2, 4, 3));
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");
// fs.readdir(path.join(__dirname, "data"), function (err, files) {
//   // locating the folder where the files are , base on that we see all the files in the folder
//   if (err) {
//     // catch the error if they would be any.
//     console.log(err);
//   } else {
//     //creation of folder

//     fs.mkdir(path.join(__dirname, "average"), (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("The folder has been created");
//       }
//     });

//     //save a file

//     fs.writeFile(
//       path.join(__dirname, "average", "result.txt"),
//       "test",
//       (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("File created");
//         }
//       }
//     );
//     files.forEach((file) => {
//       fs.readFile(path.join(__dirname, "data", file), (err, data) => {
//         //we can add another
//         if (err) {
//           console.log(err);
//         } else {
//           const theData = JSON.parse(data);
//           console.log(theData[0].name);
//         }
//       });
//     });
//   }
// });

// change name of folder
// fs.rename(
//   path.join(__dirname, "data"),
//   path.join(__dirname, "data-temp"),
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Changed the folder name");
//     }
//   }
// );

// rename file
// fs.rename(
//   path.join(__dirname, "data-temp", "students-first-year.txt"),
//   path.join(__dirname, "data-temp", "studentami-first-year.txt"),
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(" your file has change the name");
//     }
//   }
// );
//remove an empty folder
// fs.rmdir(path.join(__dirname, "data-temp-copy"), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Your folder is now deleted");
//   }
// });

// fs.rm(path.join(__dirname, "average", "result.txt"), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("The file was deleted");
//   }
// });
// Event loops in Node.

// function sleep(ms) {
//   let now = Date.now();
//   while (Date.now() - now < ms) {}
// }
// console.log("Before reading a file");
// console.time("Time it tooks:");
// fs.readFile(
//   path.join(__dirname, "data-temp", "studentami-first-year.txt"),
//   async () => {
//     console.log("Read file");
//     console.timeEnd("Time it tooks:");
//   }
// );
// sleep(6000);
// console.log("After reading file");

// UTILISATION OF EVENTS IN NODE.
// events are another one of the core modules in Node, and thy are so significannt that it's worth discussing them seperately.

// const emitter = new EventEmitter();
// emitter.on("message", (msg) => {
//   console.log("Message :" + msg);
// });
// emitter.emit("message", "Hello World");
// emitter.emit("message", "World");
// const printdata = (data) => {
//   console.log(`Data ${data.data} from the address ${data.url}`);
// };
// class Puller extends EventEmitter {
//   constructor(url) {
//     super();
//     this.url = url;
//   }
//   pull() {
//     this.interval = setInterval(() => {
//       this.emit("getData", { data: "Taken data", url: this.url });
//     }, 1000);
//   }

//   stop(callback) {
//     this.removeListener("getData", callback);
//     clearInterval(this.interval);
//   }
// }
// const puller = new Puller("https://example.com");
// puller.on("getData", printdata);
// puller.pull();
// setTimeout(() => {
//   puller.stop(printdata);
// }, 10000);
// STREAM IN NODE.

let readStream = fs.createReadStream("./data-temp/studentami-first-year.txt");
readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
