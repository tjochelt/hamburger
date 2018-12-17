const orm = require("../config/orm.js");

const burger = {
  selectAllBurgers: cb => {
    orm.selectAllBurgers("burgers", res => {
      console.log(res);
      // cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createNewBurger: (name, devoured, cb) => {
    orm.createNewBurger("burgers", name, devoured, res => {
      // cb(res);
    });
  },
  updateBurger: (id, devoured, cb) => {
    orm.updateBurger("burgers", id, devoured, function(res) {
      // cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = orm;
