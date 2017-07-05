const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
	genre: String,
	actors: [String],
	title: String,
	year: Number,
	rating: Number
});

module.exports = mongoose.model("Movie", movieSchema);