const express = require("express");
const router  = express.Router();

const movieManagerController = require("../controllers/movieManagerController");

const {catchErrors} = require("../handlers/errorHandlers");

// displays all the movies in the dataabase
router.get("/", movieManagerController.showLandingPage);

router.get("/show", catchErrors(movieManagerController.showMovies));

// adds a movie to the database
router.get("/add", movieManagerController.addMovieForm);
router.post("/add", catchErrors(movieManagerController.addMovie));

// form to search for movie(s)
router.get("/search", movieManagerController.searchMovieForm);
router.post("/search", catchErrors(movieManagerController.getMovies));


module.exports = router;