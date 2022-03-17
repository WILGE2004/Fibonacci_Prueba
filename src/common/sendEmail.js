const nodemailer = require("nodemailer");

module.exports.SendEmail = {
  email: (data, users) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "wilhelmgeney@gmail.com",
        pass: "kobeswxqnluuvvvk",
      },
    });

    const mailOptions = {
      from: "wilhelmgeney@gmail.com",
      to: users,
      subject: "Creacion Serie Fibonacci: Wilhelm Geney",
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
