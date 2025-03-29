// let firstname = "Tycoon";
// let surname = "Badocha";
// console.log(`My name is ${firstname} ${surname}`);
// const math = require("./Module/math");
// console.log(math.multiply(1, 2, 4, 3));
const fs = require("fs");
const path = require("path");
fs.readdir(path.join(__dirname, "data"), function (err, files) {
  // locating the folder where the files are , base on that we see all the files in the folder
  if (err) {
    // catch the error if they would be any.
    console.log(err);
  } else {
    //creation of folder

    fs.mkdir(path.join(__dirname, "average"), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("The folder has been created");
      }
    });

    //save a file

    fs.writeFile(
      path.join(__dirname, "average", "result.txt"),
      "test",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File created");
        }
      }
    );
    // files.forEach((file) => {
    //   fs.readFile(path.join(__dirname, "data", file), (err, data) => {
    //     //we can add another
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       const theData = JSON.parse(data);
    //       console.log(theData[0].name);
    //     }
    //   });
    // });
  }
});
