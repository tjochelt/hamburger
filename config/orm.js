const connection = require("./connection.js");

const orm = {
  selectAllBurgers: cb => {
    // console.log(tableInput + " this the tableinput");
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log("from orm file" + result);
      // cb(result);
    });
  },
  createNewBurger: (tableInput, colToSearch, valOfCol) => {
    let queryString = "insert into ?? (name, devoured) values (?, ?)";
    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateBurger: (whatToUpdate, newValue, idValue) => {
    let queryString = "UPDATE burgers SET ?? = ? where id=?";
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
