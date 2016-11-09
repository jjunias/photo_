// serverjs

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var multer 		= require('multer');
var path = require('path'); //main 페이지 설정 index.html
// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
app.use(express.static(path.join(__dirname, 'public'))); //index페이지 설정

mongoose.connect('mongodb://orstudio:123321@ds139937.mlab.com:39937/orstudio');

// DEFINE MODEL
var User = require('./models/user');
var View = require('./models/view');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]

var port = process.env.PORT || 7000;

// [CONFIGURE ROUTER]
var user_Router = require('./routes/user')(app,User);
var user_View = require('./routes/view')(app,View);
// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});