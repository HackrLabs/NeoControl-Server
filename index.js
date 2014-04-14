var express = require('express'),
		controller = require('./libs/controller')

var app = express();
app.get('/rainbow1', controller.rainbow1())
app.get('/rainbow2', controller.rainbow2())
app.get('/eq1', controller.eq1())
app.get('/eq2', controller.eq2())
app.get('/*', function(req, res){
	res.send('This page is not active');
})
