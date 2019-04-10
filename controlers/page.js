const pageModel = require("../model/page.js");
const navmenuModel = require("../model/navmenu.js");

module.exports = class {
	static async pageRoute(pageName, req, res, next) {
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
	}
};
