const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

exports.showLandingPage = async (req, res) => {
	const movies = await Movie.find();
	res.render("landing", { title: "Welcome to the Movie Manager.", movies });
};

exports.addMovieForm = (req, res) => {
	res.render("movies/add", { title: "Add a New Movie."});
};

exports.addMovie = async (req, res) => {
	sActors = req.body.actors;
	// TODO: Make sure the names are not mangled or that an incorrect separator was used.
	req.body.actors = sActors.split(",");
	// TODO: Validate inputs
	const movie = new Movie(req.body);
	await movie.save();
	// res.json(req.body);
	res.redirect("/");

};

exports.searchMovieForm = (req, res) => {
	res.render("movies/search", { title: "Search for a Movie."});
};

exports.getMovies = (req, res) => {
	res.json(req.body);
	// res.send("Query the database, return movies info and display them.")
};