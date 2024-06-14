const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/db.config")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User.model")(sequelize, Sequelize);
db.Device = require("./Device.model")(sequelize, Sequelize);
db.Record = require("./Record.model")(sequelize, Sequelize);

module.exports = db