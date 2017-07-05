exports.showLandingPage = (req, res) => {
	res.render("landing", { title: "Welcome to the Movie Manager." });
};

exports.addMovieForm = (req, res) => {
	res.render("movies/add", { title: "Add a New Movie." });
};

exports.addMovie = (req, res) => {
	res.send("Validate movie information and add to the database.");
};

exports.searchMovieForm = (req, res) => {
	res.render("movies/search", { title: "Search for a Movie." });
};

exports.getMovies = (req, res) => {
	res.send("Query the database, return movies info and display them.")
};