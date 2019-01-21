const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.allBurgers(function(data) {
    console.log("we got here", data);
    var handlebarsObject = {
      burgers: data
    };
    console.log("this is the hbs", handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.createBurger(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    result => {
      console.log("insert burger", result);
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  console.log("id=", req.params.id);
  console.log("EATEN  :" + req.body.devoured);
  console.log(req.body);
  var devouredStatus = "id = " + req.params.id;

  console.log("Devoured status something", devouredStatus);

  burger.updateBurger(
    {
      devoured: req.body.devoured
    },
    devouredStatus,
    result => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
router.delete("/api/burgers/:id", function(req, res) {
  console.log("id=", req.params.id);
  console.log("EATEN  :" + req.body.devoured);
  console.log(req.body);
  var devouredStatus = "id = " + req.params.id;

  console.log("Devoured status something", devouredStatus);

  burger.deleteBurger(devouredStatus, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
