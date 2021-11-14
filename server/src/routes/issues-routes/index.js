const express = require("express");
const { searchItemsById, searchItemsByQuery } = require("../../utils");
const { issuesList, messageError } = require("../../utils/constants");

const router = express.Router();

router.get("/", function (req, res) {
  const searchValue = req.query.search;
  const search = searchItemsByQuery(searchValue?.toLowerCase());
  if (searchValue?.length) {
    return res.send(search);
  }
  res.send(issuesList);
});

router.get("/:id", function (req, res) {
  const search = searchItemsById(req.params.id);
  if (search.length) {
    res.send(search[0]);
  } else {
    return res.status(404).json({ error: messageError });
  }
});

module.exports = router;
