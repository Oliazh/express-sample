const router = require("express").Router();
// const path = require("path");

// const db = require("../config/db");

// async function getUsers() {
//     let connection = await db.getConnection();
//     const rows = await connection.query("SELECT * FROM user");
//     connection.end();
//     return rows;

// }
const pageController = require("../controlers/page.js");

router.get("/", async (req, res, next) => {
	pageController.pageRoute("home", req, res, next);
});

router.get("/:page", async (req, res, next) => {
	let p = req.params.page.toLowerCase();
	pageController.pageRoute(p, req, res, next);
});

// router.get("/inc", (req, res) => {
//     return res.send(path.join(__dirname, "inc"));
// });
// router.get("/hello", (req, res) => {
//     return res.send(req.importantData + "<br>hey there");
// });

module.exports = router;
