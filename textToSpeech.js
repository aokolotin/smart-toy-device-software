/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

// Load the SDK
var AWS = require('aws-sdk');
var Stream = require('stream');
var Speaker = require('speaker');
var volume = require("pcm-volume");

// Create an Polly client
var Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
});

var say = function(text) {
    
    // Create the Speaker instance
    var Player = new Speaker({
      channels: 1,
      bitDepth: 16,
      sampleRate: 16000
    });
    
    var params = {
        'Text': text,
        'OutputFormat': 'pcm',
        'VoiceId': 'Maxim'
    };
    
    // Create a volume instance 
    var v = new volume();

    Polly.synthesizeSpeech(params, function(err, data) {
        if (err) {
            console.log(err);
        } else if (data) {
            if (data.AudioStream instanceof Buffer) {

                console.log("Success!!!!!!!!!!!!!!!!!!");
                console.log(data);

                v.setVolume(2);
                v.pipe(Player);

                // Initiate the source
                var bufferStream = new Stream.PassThrough();
                // convert AudioStream into a readable stream
                bufferStream.end(data.AudioStream);
                // Pipe into Player
                bufferStream.pipe(v);
            }
        }
    });
};

exports.say = say;