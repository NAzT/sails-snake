/**
 * Bootstrap
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {
	try {
		var serialport = require("serialport")
		var SerialPort = serialport.SerialPort;
		var serialPort = new SerialPort("/dev/tty.usbmodem1431", {
		     baudrate: 9600,
		     parser: serialport.parsers.readline("\r\n") 
		}, true);

		sails.serialPort = serialPort;
	}
	catch(err) {
		console.log(err);
	}


  // It's very important to trigger this callack method when you are finished 
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
