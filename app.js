const express 		= require("express");
const ejs	  		= require("ejs");
const indexRoutes = require("./routes/index");

const app = express();

// view engine setup
app.set("view engine", "ejs");

app.use("/", indexRoutes)

app.set("port", process.env.port || 8000);
const server = app.listen(app.get("port"), () => {
	console.log(`Express running on PORT: ${server.address().port}`);
});