/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var startBoard = require('./startBoard').startBoard;
var startWs = require('./startWs').startWs;
var internalEvents = require('./internalEvents');
var initialize = require('./initialize');

startBoard();

initialize.init();

startWs();
internalEvents.startInternalEventsListening();