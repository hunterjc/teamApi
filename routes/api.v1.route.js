const express = require("express");
const router = express.Router();

router.use("/", require("./v1/team.route"));
module.exports = router;
