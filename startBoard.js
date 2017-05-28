/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

var startBoard = function() {
    
    console.log("----------------------------------------");
    console.log("\n\n\n\n\n\n");
    console.log("----------------------------------------");
    
    var APP_NAME = "SmartToy" ;
    var Cfg = require("./utl/cfg-app-platform.js") ;    // get Cfg() constructor
    var cfg = new Cfg() ;                               // init and config I/O resources

    
    console.log("Initializing " + APP_NAME) ;

    process.on("exit", function(code) {                 // define up front, due to no "hoisting"
        //clearInterval(intervalID) ;
        console.log(" ") ;
        console.log("Exiting " + APP_NAME + ", with code:", code) ;
        console.log(" ") ;
    }) ;


    // confirm that we have a version of libmraa and Node.js that works
    // exit this app if we do not

    cfg.identify() ;                // prints some interesting platform details to console

    if( !cfg.test() ) {
        process.exit(1) ;
    }

    if( !cfg.init() ) {
        process.exit(2) ;
    }
};

module.exports.startBoard = startBoard;