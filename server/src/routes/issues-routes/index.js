const express = require("express");
const issuesList = require("../../utils/constants");
const router = express.Router();

router.get("/", function (req, res) {

  res.send(issuesList);
});

router.get("/:id", function (req, res) {
  const object = {
    id: 1,
    name: "Prueba",
    cover_image: "img.png",
    description: "description test",
  };
  res.send(object);
});
