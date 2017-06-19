/*
-=|Require Dependencies|=-
*/
var express = require("express");
var request = require("request");

/*
-=|Initialize Express Router|=-
*/
var app = express.Router();

/*
-=|Require Models|=-
*/
var Article = require("../models/Article.js");

/* 
-=|Routes|=-
*/
module.exports = function(app) {
	
/*
Get Route, to get all saved articles.
*/
app.get("/saved", function(req, res) {
    /*Find all articles*/
    Article.find({}, function(error, doc) {
        if (error) {
            console.log(error);
        }
        /* If no error, send back all articles in JSON format */
        else {
            res.json(doc);
        }
    });
});

/*
Post Route, to save an article to the database.
*/
app.post('/saved', function (req, res) {
  Article.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbArticle) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbArticle);
    });
})
/*
Delete Route, to delete a saved article from the database.
*/
app.get("/delete/:id", function(req, res) {

    Article.remove({"_id": req.params.id}, function(err) {
        if (err) {
            console.log("Error: " + err)
        } else {
            console.log("This article deleted sucessfully!");
            res.redirect('/');
        }
    });
});

/*
Get Route (root), loads the Single Page Application.
*/
app.get('/', function (req, res) {
  res.send('saved article');
})

/* 
-=|Export Route for server to use.|=-
*/
};