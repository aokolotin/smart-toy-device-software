/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

var onHitHandler;

board.on("ready", function() {
    // Plug the MMA7660 Accelerometer module
    // into an I2C jack
    var acceleration = new five.Accelerometer({
        controller: "MMA7660"
    });
    
    
    acceleration.on("change", function() {
        console.log("  x            : ", this.x);
        //console.log("  y            : ", this.y);
        //console.log("  z            : ", this.z);
        //console.log("  pitch        : ", this.pitch);
        //console.log("  roll         : ", this.roll);
        //console.log("  acceleration : ", this.acceleration);
        //console.log("  inclination  : ", this.inclination);
        //console.log("  orientation  : ", this.orientation);
        //console.log("--------------------------------------");
    });
});

var addOnHitHandler = function(handler) {
    onHitHandler = handler;
};

exports.addOnHitHandler = addOnHitHandler;