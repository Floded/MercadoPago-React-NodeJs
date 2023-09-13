const postNotificationHandler = (req, res) => {
  console.log("NOTIFICACION DE PAGO");
  console.log({ req });
  res.status(200).send("ok");
};

module.exports = {
  postNotificationHandler,
};
