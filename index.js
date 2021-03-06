const express = require("express");

const { Config } = require("./src/config/index");
const { FibonacciAPI } = require("./src/fibonacci/index");
const { IndexAPI, NotFoundAPI } = require("./src/index/index");

const app = express();

IndexAPI(app);
FibonacciAPI(app);
NotFoundAPI(app);

app.listen(Config.port, () => {
  console.log(`Server listening on port ${Config.port}`);
});
