const sendEmail = (to, subject, body) => {
  console.log(` Email to ${to} with subject :"${subject}" saying "${body}"`);
};
module.exports = sendEmail;
