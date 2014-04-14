var serial = require('serialport').SerialPort,
		sp = new serial("/dev/USB0",
			{ baudrate: 57600
			}
		)

var controller = {};

controller.rainbow1 = function(req, res){
	sp.write('rainbow1/n');
	req.send("success")
}
controller.rainbow2 = function(req, res){
	sp.write('rainbow2/n');
	req.send("success")
}
controller.eq1 = function(req, res){
	sp.write('eq1/n');
	req.send("success")
}
controller.eq2 = function(req, res){
	sp.write('eq2/n');
	req.send("success")
}

module.exports = controller;
