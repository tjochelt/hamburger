const orm = require("../config/orm.js");

const burger = {
  allBurgers: cb => {
    orm.allBurgers("burgers", res => {
      console.log("we're here in the burger file", res);
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createBurger: (cols, vals, cb) => {
    orm.createBurger("burgers", cols, vals, res => {
      cb(res);
    });
  },
  updateBurger: (objColVals, condition, cb) => {
    orm.updateBurger("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
