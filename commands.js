/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var textToSpeech = require('./textToSpeech');
var vibration = require('./vibration');
var hand = require('./hand.js');

var commandsHandler = function(command) {
    
    var commandParts = command.split(" ");
    switch(commandParts[0]) {
        case "say":
            textToSpeech.say(commandParts[1]);
            break;
        case "vibr-on":
            vibration.on();
            break;
        case "vibr-off":
            vibration.off();
            break;
        case "hand-up":
            hand.handUp();
            break;
        case "hand-down":
            hand.handDown();
            break;
    }
};

exports.commandsHandler = commandsHandler;