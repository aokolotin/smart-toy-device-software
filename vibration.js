/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var mraa = require('mraa');

var pin = new mraa.Gpio(2);
pin.dir(mraa.DIR_OUT);


var on = function() {
    pin.write(0);
};

var off = function() {
    pin.write(1);
};

exports.on = on;
exports.off = off;