const { createPreference } = require("../controllers/paymentController");

const getcreateOrderHandler = async (req, res) => {
  const result = await createPreference();
  res.status(200).json(result);
};

const getSuccessHandler = (req, res) => {
  res.status(200).send("Arpobado");
};

module.exports = {
  getcreateOrderHandler,
  getSuccessHandler,
};
