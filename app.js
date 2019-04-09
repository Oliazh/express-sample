const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const rootRouter = require("./routes/root.js");
const usersRouter = require("./routes/users.js");
const numberRouter = require("./routes/numbers.js");
const port = 9000;

app.set("view engine", "hbs");


app.use(cookieParser());
app.use("/inc", express.static(path.join(__dirname, 'inc')));

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
app.listen(port, function () {
	return console.log("Sample App " + port + "!");
});