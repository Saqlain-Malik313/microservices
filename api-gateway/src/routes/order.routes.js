const express = require("express");
const router = express.Router();
const proxy = require("../../utils/serviceProxy");

router.use((req, res, next) => {
  proxy(req, res, next, "http://localhost:5003");
});

module.exports = router;