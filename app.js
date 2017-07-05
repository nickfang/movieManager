const express 			= require("express");
const ejs	  			= require("ejs");
const mongoose			= require("mongoose");
const bodyParser		= require("body-parser");
const errorHandlers 	= require("./handlers/errorHandlers");
const helpers 			= require("./helpers");

require("./models/Movie");
require("dotenv").config({ path: "variables.env" });

const indexRoutes 	= require("./routes/index");


// connect to our database
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
	console.error(`Mongoose error: ${err.message}`);
});

const app = express();

// serves up static files from the public folder
app.use(express.static(__dirname + "/public"));

// view engine setup
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass global information to each page.
app.use((req, res, next) => {
	res.locals.h = helpers;
	next();
});

app.use("/", indexRoutes);

app.use(errorHandlers.notFound);

console.log(process.env.PORT);

app.set("port", process.env.PORT || 8000);
const server = app.listen(app.get("port"), () => {
	console.log(`Express running on PORT: ${server.address().port}`);
});