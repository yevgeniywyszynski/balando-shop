const express = require("express");
const cors = require("cors");
bodyParser = require("body-parser");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

const products = require("./routes/products.routes");
const payments = require("./routes/payments.routes");

app.use("/api", products);
app.use("/api", payments);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
