/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

// Load Grove module
var groveSensor = require('jsupm_grove');

// Create the light sensor object using AIO pin 0
var light = new groveSensor.GroveLight(1);

var onLightOffHandler;
var onLightOnHandler;

var lightIsOn = true;

// Read the input and print both the raw value and a rough lux value,
// waiting one second between readings
function readLightSensorValue() {
    if(light.value() < 1) {
        if(lightIsOn) {
            onLightOffHandler();
        }
        
        lightIsOn = false;
    }
    else {
        if(!lightIsOn) {
            onLightOnHandler();
        }
        
        lightIsOn = true;
    }
}

setInterval(readLightSensorValue, 100);

var addOnLightOffHandler = function(handler) {
    onLightOffHandler = handler;
};

var addOnLightOnHandler = function(handler) {
    onLightOnHandler = handler;
};

exports.addOnLightOffHandler = addOnLightOffHandler;
exports.addOnLightOnHandler = addOnLightOnHandler;