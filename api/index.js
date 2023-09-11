const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3030;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/', )

app.listen(PORT, () => {
  console.log(`Sever runing in http://localhost:${PORT}`);
});
