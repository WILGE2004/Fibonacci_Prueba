const express = require("express");
const { FibonacciController } = require("./controller");
const router = express.Router();

module.exports.FibonacciAPI = (app) => {
  router.post("/", FibonacciController.calculateFibonacci);

  app.use("/api/fibonacci", router);
};
