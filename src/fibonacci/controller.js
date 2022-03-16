// const debug = require("debug")("app:module-users-controller");
// const { UsersService } = require("./services");
const { Response } = require("../common/response");
const { Email } = require('../common/sendEmail');

module.exports.FibonacciController = {
  calculateFibonacci: async (req, res) => {
    try {
        const date = new Date();
        const hours = date.getHours()
        const minut = date.getMinutes();
        const second = date.getSeconds();
        const semillas = minut.toString().split("");
        const num = second + 1;
        const fib = [Number(semillas[0]), Number(semillas[1])];

        for (let i = 2; i <= num; i++) {
            fib[i] = fib[i - 1] + fib[i -2];
        }
        const result = [`${hours}:${minut}:${second}`, fib]

      
      Response.success(res, 200, "Serie Fibonacci Creada", result);

    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
}