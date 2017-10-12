const express = require("express");
const app = express();

const path = require("path");

const compression = require('compression');

var CryptoJS = require("crypto-js");
var nJwt = require('njwt');
var secureRandom = require('secure-random');

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(express.static(path.join(__dirname,"./public")));
app.use(bodyParser({limit: '5mb'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(compression())

var dbConnected = false;
const mongoose = require('mongoose');
var uri = "mongodb://localhost:27017/kiddodrawing";
// var uri = "mongodb://herono1:2180450a@publisher-shard-00-00-x12rv.mongodb.net:27017,publisher-shard-00-01-x12rv.mongodb.net:27017,publisher-shard-00-02-x12rv.mongodb.net:27017/kiddodrawing?ssl=true&replicaSet=publisher-shard-0&authSource=admin"

mongoose.connect(uri);


mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
	.once('open', function() {
	  // we're connected!
	  console.log('connected by mongoose');
	  //dbConnected = true;
	});


const getUser = require("./controllers/userController");
app.use("/user",getUser);


const getFeed = require("./controllers/feedController");
app.use("/feed",getFeed);

const getComment = require("./controllers/commentController");
app.use("/comment",getComment);

app.set('port', (process.env.PORT || 5000));



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
