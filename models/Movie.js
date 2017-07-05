const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: "Please enter a movie name!" },
	genre: {
		type: String,
		trim: true },
	year: {
		type: Number },
	actors: [{
		type: String,
		trim: true }],
	rating: {
		type: Number }
});

module.exports = mongoose.model("Movie", movieSchema);