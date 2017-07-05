const express = require("express");
const router  = express.Router();

const movieManagerController = require("../controllers/movieManagerController");

router.get("/", movieManagerController.showLandingPage);

module.exports = router;