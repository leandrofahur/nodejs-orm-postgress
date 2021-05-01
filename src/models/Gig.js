const Sequelize = require("sequelize");
const db = require("../config/db");

const Gig = db.define("gig", {
  title: {
    type: Sequelize.STRING,
  },
});

module.exports = Gig;
