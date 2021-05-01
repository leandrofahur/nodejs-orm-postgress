const express = require("express");
const router = express.Router();
// const db = require("../config/db");
// const Gig = require("../models/Gig");

router.get("/", (req, res) => {
  res.send("GIGS");
});

module.exports = router;
