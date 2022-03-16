const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wilhelmgeney@gmail.com",
    pass: "kobeswxqnluuvvvk",
  },
});

var mailOptions = {
  from: "wilhelmgeney@gmail.com",
  to: "wilhelmgeney@gmail.com",
  subject: "Creacion Serie Fibonacci: Wilhelm Geney",
  text: "Hola",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email enviado: " + info.response);
  }
});
