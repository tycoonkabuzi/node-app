const EmitterEvent = require("events");
const sendEmail = require("./handlers/emailHandler");
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
  }
}
module.exports = new NotificationSystems();
