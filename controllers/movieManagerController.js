const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

exports.showLandingPage = (req, res) => {
	res.render("landing", { title: "Welcome to the Movie Manager."});
}

exports.showMovies = async (req, res) => {
	const movies = await Movie.find();
	res.render("movies/show", { title: "Movie Collection.", movies });
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
	res.redirect("/show");

};

exports.searchMovieForm = (req, res) => {
	res.render("movies/search", { title: "Search for a Movie."});
};

exports.getMovies = async (req, res) => {
	// Search for Title, Genre or Actor by partial or full match
	// Search for Year by year or range.
	// Search for rating by rating or range
	// TODO: store values as lowercase so search are easier?
	// Get match search working first.

	// remove any keys that are empty strings so the search isn't messed up.
	for (var key in req.body) {
		if (req.body[key] === "") {
			delete req.body[key];
		}
	}
	const movies = await Movie.find(req.body);
	res.render("movies/show", { title: "Movies Found.", movies })
};