var express = require("express");
var burger = require("../models/burger")
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll().then(function(data) {
    var condition = "id = " + req.params.id;
    var hbsObject = {
      burgers: condition
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.name, function(result) {
    
    console.log(result);
    res.redirect("/");
  });
})

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition)
    .then(
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;