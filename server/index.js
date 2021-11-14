const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes");
const app = express();

//middleware
//Midlewares de parseo para data del body
app.use(cookieParser());
app.use(cors());

app.use("/zinio-api", routes);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Internal server error");
});

//levanto y sincronizo la base, luego si todo ok, levanto servidor

app.listen(3200);
console.log("Server available at http://localhost:3200");
