'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _rsvp = require('rsvp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotificationService = function () {
  function NotificationService(host, port) {
    _classCallCheck(this, NotificationService);

    this._host = host;
    this._port = port;
  }

  _createClass(NotificationService, [{
    key: 'notify',
    value: function notify(title, message) {
      var options = {
        host: this._host,
        port: this._port,
        path: '/jsonrpc',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      var payload = {
        jsonrpc: '2.0',
        method: 'GUI.ShowNotification',
        params: {
          title: title,
          message: message
        },
        id: 1
      };

      return new _rsvp.Promise(function (resolve, reject) {
        var request = _http2.default.request(options, function (res) {
          console.log('response: ', res);
          resolve();
        }, function (e) {
          console.log('e');
        });

        var errorHandler = function errorHandler(e) {
          console.log(e);
          reject(e);
        };

        request.on('error ', errorHandler);
        request.socket.on('error ', errorHandler);

        request.write(_querystring2.default.stringify(payload));
        request.end();
      });
    }
  }]);

  return NotificationService;
}();

exports.default = NotificationService;