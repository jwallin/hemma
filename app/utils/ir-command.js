import {Promise} from 'rsvp';
import exec from 'child_process';

const SEND_ONCE = 'SEND_ONCE'; 
const SEND_START = 'SEND_START';
const SEND_STOP = 'SEND_STOP';

// Command to execute
const irsendCommand = 'irsend -d /run/lirc/lircd-lirc0';

var send = function(device, command, key) {
  return new Promise(function (resolve, reject) {
    var commandString = [irsendCommand, device, command, key].join(' ');
    exec(commandString, function (error, stdout, stderr) {
      if (error) {
        reject(stderr);
      } else {
        resolve();
      }
    })  
  });
};

module.exports = {
  sendCommand: function(deviceName, deviceKey) {
    return send(SEND_ONCE, deviceName, deviceKey);
  },
  startCommand: function(deviceName, deviceKey) {

  },
  endCommand: function(deviceName, deviceKey) {

  }
};