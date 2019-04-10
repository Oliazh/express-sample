const db = require("mariadb");

const dbCon = require("./dbCon");


let dbLayer = {
    connected: false,
    init: () => {
        this.pool = db.createPool(dbCon);
        this.connected = true;
    },
    getConnection: async () => {
        if (this.connected) {
            return await this.pool.getConnection();
        } else {
            throw "Database don't connected!";
        }
    }


};


module.exports = dbLayer;