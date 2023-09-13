const { Router } = require("express");
const {
  getcreateOrderHandler,
  getSuccessHandler,
} = require("../handlers/getCreateOrderHandler");
const {
  postNotificationHandler,
} = require("../handlers/postNotificationHandler");

const mprouter = Router();

mprouter.get("/create-order", getcreateOrderHandler);
mprouter.get("/success", getSuccessHandler);
mprouter.post("/notification", postNotificationHandler);

module.exports = mprouter;
