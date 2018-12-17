const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAllBurgers(function(data) {
    console.log("we got here");
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers/:burgerName", function(req, res) {
  burger.createNewBurger(req.params.burgerName, false, result => {
    console.log("insert burger", result);
    res.json({ id: result.insertID });
  });
  // ["name", "devoured"],
  // [req.body.name, req.body.devoured],
  // function(result) {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
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

// {
//   devoured: req.body.devoured
// },
// condition,
// function(result) {
//   if (result.changedRows == 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     return res.status(404).end();
//   } else {
//     res.status(200).end();
//   }
//   }
// );

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
