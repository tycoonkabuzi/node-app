const path = require("path");
const fs = require("fs");

const saveData = (pathToJason, newFolder, isPresent) => {
  // created a counter to have the folder name changed accordingly
  let counter = 0;
  // reading the directory where the file is
  fs.readdir(path.join(pathToJason), (err, file) => {
    if (err) {
      console.log(err);
    } else {
      // reading the file in the directory
      fs.readFile(
        path.join(__dirname, "json", file.toString()),
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            //create a folder with the name provided as an argument

            const createFolderAndAddingFiles = (folderName) => {
              fs.mkdir(path.join(__dirname, folderName), (err) => {
                if (err && err.code === "EEXIST") {
                  if (isPresent) {
                    counter++;
                    createFolderAndAddingFiles(`${newFolder} ${counter}`);
                  } else {
                    console.log("This folder is already created");
                  }
                } else if (err) {
                  console.log(
                    "We have this error when creating the folder" + err
                  );
                } else {
                  console.log(
                    `The folder ${folderName} was created successfully`
                  );
                }
                const jsoData = JSON.parse(data);
                jsoData.forEach((user) => {
                  fs.writeFile(
                    // writing in the file. adding bellow information
                    path.join(
                      __dirname,
                      folderName,
                      `${user.id}-${user.name}.txt`
                    ),
                    `name: ${user.name}
                street: ${user.address.street}
                Zip Code:${user.address.zipcode}
                city:${user.address.city}
                phone: ${user.phone}`,
                    (err) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log(
                          `The file ${user.id}-${user.name}.txt has been created`
                        );
                      }
                    }
                  );
                });
              });
            };
            createFolderAndAddingFiles(newFolder);
          }
        }
      );
    }
  });
};
saveData("./json", "main", true);
