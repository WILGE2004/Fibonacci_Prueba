const express = require("express");

const { Config } = require("./src/config/index");
const { FibonacciAPI } = require("./src/fibonacci/index");

const app = express();

FibonacciAPI(app);

app.listen(Config.port, () => {
  console.log(`Server listening on port ${Config.port}`);
});
