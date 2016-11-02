'use strict';

var Promise = require('rsvp').Promise;
var exec = require('child_process').exec;

var SEND_ONCE = 'SEND_ONCE';
var SEND_START = 'SEND_START';
var SEND_STOP = 'SEND_STOP';

// Command to execute
var irsendCommand = 'irsend -d /run/lirc/lircd-lirc0';

var send = function send(device, command, key) {
  return new Promise(function (resolve, reject) {
    var commandString = [irsendCommand, device, command, key].join(' ');
    exec(commandString, function (error, stdout, stderr) {
      if (error) {
        reject(stderr);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  sendCommand: function sendCommand(deviceName, deviceKey) {
    return send(SEND_ONCE, deviceName, deviceKey);
  },
  startCommand: function startCommand(deviceName, deviceKey) {},
  endCommand: function endCommand(deviceName, deviceKey) {}
};