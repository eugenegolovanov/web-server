var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');


// //every page requested we will go through middleware
// app.use(middleWare.requireAuthentification);
app.use(middleware.logger);//add logger middleware to app



app.get('/about', middleware.requireAuthentification, function (req, res) {
	res.send('Super about stuff');
});

// console.log('__dirname:' + __dirname);

//Pointing to folder as startpage
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Express server started with port:' + PORT);
});
