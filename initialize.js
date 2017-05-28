/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var init = function() {
    var vibration = require('./vibration');
    
    vibration.off();
};

exports.init = init;