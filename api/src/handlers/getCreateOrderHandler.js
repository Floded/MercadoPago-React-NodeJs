const getcreateOrderHandler = (req, res) => {
  res.status(200).send("ok");
};

const getSuccessHandler = (req, res) => {
  res.status(200).send("Arpobado");
};

module.exports = {
  getcreateOrderHandler,
  getSuccessHandler,
};
