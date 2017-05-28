/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var groveSensor = require('jsupm_grove');

var blueLed = new groveSensor.GroveLed(2);
var redLed = new groveSensor.GroveLed(3);
var greenLed = new groveSensor.GroveLed(4);

var getLedByColor = function(color) {
    switch(color) {
        case "blue":
            return blueLed;
        case "red":
            return redLed;
        case "green":
            return greenLed;
        default:
            return null;
    }
};

var changeState = function(color, state) {
    if(state) {
        getLedByColor(color).on();
    }
    else {
        getLedByColor(color).off();
    }
};

var on = function(color) {
    changeState(color, true);
};

var off = function(color) {
    changeState(color, false);
};

exports.on = on;
exports.off = off;


