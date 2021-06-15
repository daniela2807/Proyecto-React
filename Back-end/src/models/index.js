const dbConfig = require("../config/mongodb.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model")(mongoose);
db.product = require("./product.model")(mongoose);
db.category = require("./category.model")(mongoose);
db.address = require("./address.model")(mongoose);
db.favorit = require("./favorites.model")(mongoose);
db.slider = require("./slider.model")(mongoose);

module.exports = db;
