const router = require('express').Router();
const path = require("path");

// const db = require("../config/db");

// async function getUsers() {
//     let connection = await db.getConnection();
//     const rows = await connection.query("SELECT * FROM user");
//     connection.end();
//     return rows;

// }
const pageModel = require("../model/page.js")
const navmenuModel = require("../model/navmenu.js")

const pageRoute = async (pageName, req, res, next) => {
    let page = await pageModel.getPage(pageName);
    let navmenu = await navmenuModel.getNavmenu();
    // console.log(navmenu);

    if (page[0]) {
        page = page[0];

        return res.render("root", {
            title: page.title,
            page: page,
            nav: navmenu

        });
    } else {
        next();
    }


};


router.get("/", async (req, res, next) => {
    pageRoute("home", req, res, next);
});



router.get("/:page", async (req, res, next) => {

    let p = req.params.page.toLowerCase();
    pageRoute(p, req, res, next);

});

router.get("/inc", (req, res) => {
    return res.send(path.join(__dirname, "inc"));
});
router.get("/hello", (req, res) => {
    return res.send(req.importantData + "<br>hey there");
});

module.exports = router;