/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var lightSensor = require('./lightSensor');
var handButtons = require('./handButtons');
var accelerometer = require('./accelerometer.js');

var textToSpeech = require('./textToSpeech');

var startInternalEventsListening = function() {
    lightSensor.addOnLightOffHandler(function() {
        textToSpeech.say("ААААА! Свет выключили!");
    });
    lightSensor.addOnLightOnHandler(function() {
        textToSpeech.say("Ура! Снова светло!");
    });
    
    handButtons.addOnLegClickHandler(function() {
        console.log("leg");
    });
    
    handButtons.addOnRightClickHandler(function() {
        console.log("right");
    });
    
    handButtons.addOnLeftClickHandler(function() {
        console.log("left");
    });
    
    accelerometer.addOnHitHandler(function() {
        console.log("hit");
    })
};

exports.startInternalEventsListening = startInternalEventsListening;