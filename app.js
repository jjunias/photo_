                   // serverjs

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var multiparty = require('connect-multiparty');
var fs = require('fs');
var cloudinary =require('cloudinary');
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
app.use(multiparty()); //multiparty 사용
mongoose.connect('mongodb://orstudio:123321@ds139937.mlab.com:39937/orstudio');   //mongolab 연동
//cloudinary 
cloudinary.config({ 
  cloud_name: 'hmwuqfqmp', 
  api_key: '888957299558689', 
  api_secret: 'AzHR6re0TISvJos4oawiU-QUtUo'
});

// DEFINE MODEL
var User = require('./models/user');
var View = require('./models/view');
var Photo = require('./models/photo');
var Qa = require('./models/qa');
var Counter = require('./models/counter')
// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]

var port = process.env.PORT || 7000;

// [CONFIGURE ROUTER]
var user_Router = require('./routes/user')(app,User);
var view_Router = require('./routes/view')(app,View,cloudinary,db);
var photo_Router = require('./routes/photo')(app,Photo,cloudinary,db);
var qa_Router = require('./routes/qa')(app,Counter,Qa,db);
// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
