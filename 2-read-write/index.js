const path = require("path");
const fs = require("fs");

const saveData = (pathToJason, newFolder, isExisting) => {
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

            fs.mkdir(path.join(__dirname, newFolder), (err) => {
              if (err) {
                if (err.code == "EEXIST") {
                  isExisting == true;
                } else {
                  console.log(err);
                  isExisting == false;
                }
              } else {
                if (isExisting) {
                  console.log(`There is a folder with name ${newFolder}`);
                } else {
                  console.log(
                    `The folder ${newFolder} was created successfully`
                  );
                  const jsoData = JSON.parse(data);
                  jsoData.forEach((user) => {
                    fs.writeFile(
                      path.join(
                        __dirname,
                        newFolder,
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
                }
              }
            });
          }
        }
      );
    }
  });
};
saveData("./json", "main", false);
