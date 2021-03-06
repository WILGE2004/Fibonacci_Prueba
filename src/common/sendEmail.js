const nodemailer = require("nodemailer");
const { Config } = require("../config");

module.exports.SendEmail = {
  email: (
    users = ["wilhelmgeney@gmail.com"],
    emailSubject = "Hello",
    data = "Send email"
  ) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: Config.user,
        pass: Config.pass,
      },
    });

    const mailOptions = {
      from: "wilhelmgeney@gmail.com",
      to: users,
      subject: emailSubject,
      text: data,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email enviado: ${info.response}`);
      }
    });
  },
};
