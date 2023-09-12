const { Router } = require("express");
const {
  getcreateOrderHandler,
  getSuccessHandler,
} = require("../handlers/getCreateOrderHandler");

const mprouter = Router();

mprouter.get("/create-order", getcreateOrderHandler);
mprouter.get("/success", getSuccessHandler);

module.exports = mprouter;
