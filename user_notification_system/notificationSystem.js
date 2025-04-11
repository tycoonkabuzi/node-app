const EmitterEvent = require("events");
const sendEmail = require("./handlers/emailHandler");
const sendSms = require("./handlers/smsHandler");
class NotificationSystems extends EmitterEvent {
  constructor() {
    super();
    this.on("orderPlaced", (order) => {
      sendEmail(
        order.email,
        "Order confirmation",
        `order ${order.id} has been received`
      );
    });
    this.on("userRegistered", (user) => {
      sendEmail(
        user.email,
        "Welcome",
        `Hi ${user.name} you have been registered successfully`
      );
      sendSms(
        user.email,
        `Hi ${user.name} you have been registered successfully`
      );
    });
  }
}
module.exports = new NotificationSystems();
