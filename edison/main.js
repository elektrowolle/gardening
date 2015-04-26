var Pump  = require("./Pump");
var Light = require("./Light");

var devices = {};

devices.pump  = new Pump(13);
devices.light = new Light(13);

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;
  app.set('view engine', 'jade');

  console.log('Example app listening at http://%s:%s', host, port);
	
	// respond with "Hello World!" on the homepage
	app.get('/', function (req, res) {
	  res.render('index', { title: 'Hey', message: 'Hello there!'});
	});
	
	app.get('/dev/:device', function (req, res) {
	  res.send(
		  devices[req.params.device] ? 
		  devices[req.params.device].get() :
		  "no such device"
	  );
	});

	// accept POST request on the homepage
	
	app.post('/dev/:device/:job', function (){
		res.send('Got a POST request');
		
		console.log('Job ' + req.params.job + ' for ' + req.params.device);
	});

	// accept PUT request at /user
	app.put('/plant', function (req, res) {
	  res.send('Got a PUT request at /user');
	});

	// accept DELETE request at /user
	app.delete('/user', function (req, res) {
	  res.send('Got a DELETE request at /user');
	});

});