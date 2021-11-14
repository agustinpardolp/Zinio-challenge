const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes");
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(function (err, req, res, next) {
  res.status(500).send("Internal server error");
});
app.use("/zinio-api", routes);
app.listen(3200);
console.log("Server available at http://localhost:3200");
