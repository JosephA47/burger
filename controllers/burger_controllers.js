var express = require("express");
var burger = require("../models/burger")
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers")
})

router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var obj = {
      burger: data
    }

    console.log(obj);
    res.render("index", obj);
  });
});

router.post("/burgers/insert", function(req, res) {
  burger.insertOne(req.body.burgerName, 
    function(result) {
    
    console.log(result);
    res.json({ id: result.insertId})
    location.reload();
  });
})

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
      location.reload()
    }
  );
});

module.exports = router;