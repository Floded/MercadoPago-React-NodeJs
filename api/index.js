const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/route");

const app = express();
const PORT = 3030;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Sever runing in http://localhost:${PORT}`);
});
