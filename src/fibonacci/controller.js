const { Response } = require("../common/response");
const { SendEmail } = require("../common/sendEmail");

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

      const result = [
        `Hora de ejecucion: ${hours}:${minut}:${second}\n\nSerie fibonacci generada: ${fib}`,
      ];

      Response.success(
        res,
        200,
        "Serie Fibonacci Creada",
        "¡Email enviado con exito! Consulte su correo, por favor"
      );

      SendEmail.email(result.toString(), ["nohaj63443@siberpay.com"]);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
