var middleware = {
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


module.exports = middleware;