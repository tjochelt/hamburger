const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAllBurgers(function(data) {
    console.log("we got here");
    var handlebarsObject = {
      burgers_data: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.createNewBurger(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    result => {
      console.log("insert burger", result);
      res.json({ id: result.insertID });
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  console.log("id=", req.params.id);
  console.log("EATEN  :" + req.body.eaten);
  console.log(req.body);
  let devouredStatus = "id = " + req.params.id;

  console.log("Devoured status", devouredStatus);

  burger.updateBurger(req.params.id, req.params.eaten, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;
