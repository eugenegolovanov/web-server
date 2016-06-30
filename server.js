var express = require('express');
var app = express();
var PORT = 3000


var middleWare = {
	requireAuthentification: function (req, res, next) {
		console.log('Private route hit, Nishtyak');
		next();
	},
	logger: function (req, res, next) {
		var date = new Date().toString()
		console.log('Request: ' + req.method + ' ' + req.originalUrl + 'date: ' + date);
		next();
	}
};


// //every page requested we will go through middleware
// app.use(middleWare.requireAuthentification);

app.use(middleWare.logger);



app.get('/about', middleWare.requireAuthentification, function (req, res) {
	res.send('Super about stuff');
});

// console.log('__dirname:' + __dirname);

//Pointing to folder as startpage
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Express server started with port:' + PORT);
});
