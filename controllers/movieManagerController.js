const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

exports.showLandingPage = (req, res) => {
	res.render("landing", { title: "Welcome to the Movie Manager." });
};

exports.addMovieForm = (req, res) => {
	res.render("movies/add", { title: "Add a New Movie.", button: "Submit" });
};

exports.addMovie = async (req, res) => {
	sActors = req.body.actors;
	// TODO: Make sure the names are not mangled or that an incorrect separator was used.
	req.body.actors = sActors.split(",");
	// TODO: Validate inputs
	const movie = new Movie(req.body);
	await movie.save();
	res.json(req.body);
	// res.render("/");

// {
// "title": "test",
// "genre": "Action",
// "year": "1994",
// "actors": "John Goodman, Helen Hunt",
// "rating": "4"
// }
};

exports.searchMovieForm = (req, res) => {
	res.render("movies/search", { title: "Search for a Movie.", button: "Search" });
};

exports.getMovies = (req, res) => {
	res.send("Query the database, return movies info and display them.")
};