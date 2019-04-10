const db = require("../config/db.js")

module.exports = class {
    static async getNavmenu() {
        let connection = await db.getConnection();
        const rows = await connection.query(
            "SELECT label,pageKey FROM `navmenu` join page on page.pageId=navmenu.pageId ORDER by menuOrder");
        connection.end();
        return rows;

    }
};