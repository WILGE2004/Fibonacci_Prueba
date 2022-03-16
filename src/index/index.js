const express = require("express");
const { Response } = require("../common/response");
const createError = require("http-errors");

module.exports.IndexAPI = (app) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const menu = {
      fibonacci: `https://${req.headers.host}/api/products`
    };

    Response.success(res, 200, "Fibonacci API", menu);
  });

  app.use("/", router);
};

module.exports.NotFoundAPI = (app) => {
  const router = express.Router();

  router.all("*", (req, res) => {
    Response.error(res, new createError.NotFound());
  });

  app.use("/", router);
};
