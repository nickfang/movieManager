const express 			= require("express");
const ejs	  			= require("ejs");
const mongoose			= require("mongoose");
const indexRoutes 	= require("./routes/index");
const helpers 			= require("./helpers");
const errorHandlers 	= require("./handlers/errorHandlers");

require("./models/Movie");
require("dotenv").config({ path: "variables.env" });

const app = express();

// view engine setup
app.set("view engine", "ejs");

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