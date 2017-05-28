/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var onLegClickHandler;
var onRightClickHandler;
var onLeftClickHandler;

var legFlag = false;
var rightFlag = false;
var leftFlag = false;

var mraa = require('mraa');

var leg = new mraa.Gpio(5);
leg.dir(mraa.DIR_IN);

var right = new mraa.Gpio(7);
right.dir(mraa.DIR_IN);

var left = new mraa.Gpio(6);
left.dir(mraa.DIR_IN);

setInterval(function() {
    var legValue = leg.read();
    var rightValue = right.read();
    var leftValue = left.read();
    
    if(legValue) {
        if(!legFlag) {
            legFlag = true;
            onLegClickHandler();
        }
    }
    else {
        legFlag = false;
    }
    
    if(rightValue) {
        if(!rightFlag) {
            rightFlag = true;
            onRightClickHandler();
        }
    }
    else {
        rightFlag = false;
    }
    
    if(leftValue) {
        if(!leftFlag) {
            leftFlag = true;
            onLeftClickHandler();
        }
    }
    else {
        leftFlag = false;
    }
    
}, 100);

var addOnLegClickHandler = function(handler) {
    onLegClickHandler = handler;
};

var addOnRightClickHandler = function(handler) {
    onRightClickHandler = handler;
};

var addOnLeftClickHandler = function(handler) {
    onLeftClickHandler = handler;
};

exports.addOnLegClickHandler = addOnLegClickHandler;
exports.addOnRightClickHandler = addOnRightClickHandler;
exports.addOnLeftClickHandler = addOnLeftClickHandler;