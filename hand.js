/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var Uln200xa_lib = require('jsupm_uln200xa');

var myUln200xa_obj;

var initialize = function() {

    // Instantiate a ULN2003XA stepper object
    myUln200xa_obj = new Uln200xa_lib.ULN200XA(4096, 8, 9, 10, 11);
    
    myUln200xa_obj.setSpeed(7); // 5 RPMs
};

var dispose = function() {
    myUln200xa_obj.release();
    
    myUln200xa_obj = null;
};

var handUp = function() {
    initialize();
    
    myUln200xa_obj.setDirection(Uln200xa_lib.ULN200XA_DIR_CCW);
	myUln200xa_obj.stepperSteps(1024);
    
    dispose();
};

var handDown = function() {
    initialize();
    
    myUln200xa_obj.setDirection(Uln200xa_lib.ULN200XA_DIR_CW);
	myUln200xa_obj.stepperSteps(1024);
    
    dispose();
};

exports.handUp = handUp;
exports.handDown = handDown;
