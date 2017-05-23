var db = require("../models");

var express = require("express");

var router = express.Router();



module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    db.Burger.findAll({
    }).then(function(dbPost) {
      var hbsObject = {
        burgers: dbPost
      }
      res.render("index", hbsObject);
    });
  });


  // POST route for saving a new post
  app.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbPost) {
      res.redirect("/");
    });
  });


  // PUT route for updating posts
  app.put("/:id", function(req, res) {
    db.Burger.update({
     devoured: true,
   },
     {
       where: {
         id: req.params.id
       }
     }).then(function(dbBurger) {
       res.redirect("/");
     });
  });
};