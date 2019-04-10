/* eslint-disable no-console */
/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const hbs = require("hbs");

const app = express();
const dbLayers = require("./config/db.js");

const rootRouter = require("./routes/root.js");
const usersRouter = require("./routes/users.js");
const numberRouter = require("./routes/numbers.js");
const port = 9000;

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(cookieParser());
app.use("/inc", express.static(path.join(__dirname, "inc")));

app.use((req, res, next) => {
	res.cookie("cookies", "yuammi");

	res.importantData = "test";

	// res.send();

	next();
});
app.use("/", rootRouter);
app.use("/users", usersRouter);
app.use("/numbers", numberRouter);
// app.use(express.static(path.join(__dirname, 'inc')));
app.listen(port, function() {
	dbLayers.init();
	return console.log("Sample App " + port + "!");
});
