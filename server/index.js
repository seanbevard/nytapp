const express = require('express');
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require('path');
const mongoose = require("mongoose");

/*Initialize Express*/
const app = express();

app.set('port', process.env.PORT);

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.resolve(__dirname, '../app/build')));

require('./routes/api-routes')(app);

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

/*Configure Mongoose DB connection*/
mongoose.connect(process.env.MONGO_URI);
var db = mongoose.connection;

/*Send Mongoose errors to Console*/
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

/*Log message when successfully connected to Mongoose DB*/
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${ app.get('port') }`)
});