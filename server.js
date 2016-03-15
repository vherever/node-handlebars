var express = require('express');
var exphbs 	= require ('express3-handlebars');
var app 	= express();

app.engine('handlebars', 
	exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');	

app.get('/', function(req, res) {
	var date = new Date();

	res.render('index', {
		name: 'World!',
		date: date
	});
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5000);
app.listen(port);