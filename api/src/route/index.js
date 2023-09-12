const { Router } = require("express");
const mprouter = require("./mercadoPagoRouter");

const router = Router();

router.use("/mp", mprouter);

module.exports = router;
