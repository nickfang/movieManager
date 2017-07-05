const express = require("express");
const router  = express.Router();

const movieManagerController = require("../controllers/movieManagerController");

// displays all the movies in the dataabase
router.get("/", movieManagerController.showLandingPage);

// adds a movie to the database
router.get("/add", movieManagerController.addMovieForm);
router.post("/add", movieManagerController.addMovie);

// form to search for movie(s)
router.get("/search", movieManagerController.searchMovieForm);
router.post("/search", movieManagerController.getMovies);


module.exports = router;