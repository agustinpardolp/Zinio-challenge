const express = require("express");
const router = express.Router();
const issuesRoutes = require("./issues-routes");

router.use("/issues", issuesRoutes);

module.exports = router;
