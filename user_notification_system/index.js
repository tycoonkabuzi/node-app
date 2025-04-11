// When user is registered
const notifications = require("./notificationSystem");
notifications.emit("orderPlaced", {
  id: "12344-XE5E",
  email: "kabuziNtwali@gmail.com",
  phone: "+4812345656",
});
