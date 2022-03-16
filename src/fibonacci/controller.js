const nodemailer = require("nodemailer");
const { Response } = require("../common/response");

var sendEmail = (data) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "wilhelmgeney@gmail.com",
      pass: "kobeswxqnluuvvvk",
    },
  });

  var mailOptions = {
    from: "wilhelmgeney@gmail.com",
    to: ["wilhelmgeney@gmail.com", "correalondon@gmail.com", "chamogomez@gmail.com"],
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
};

module.exports.FibonacciController = {
  calculateFibonacci: async (req, res) => {
    try {
      const date = new Date();
      const hours = date.getHours();
      const minut = date.getMinutes();
      const second = date.getSeconds();
      const semillas = minut.toString().split("");
      const num = second + 1;
      const fib = [Number(semillas[0]), Number(semillas[1]) || 0];

      for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }

      const result = [`Hora de ejecucion: ${hours}:${minut}:${second}` + "\n\n" + `Serie fibonacci generada: ${fib}`];

      Response.success(res, 200, "Serie Fibonacci Creada", '¡Email enviado con exito! Consulte su correo, por favor');
      sendEmail(result.toString());
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
