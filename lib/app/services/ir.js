'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rsvp = require('rsvp');

var _ir = require('../../config/ir');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IrService = function () {
  function IrService(irUtil) {
    _classCallCheck(this, IrService);

    this._irUtil = irUtil;
  }

  _createClass(IrService, [{
    key: 'sendSourceCommand',
    value: function sendSourceCommand(src) {
      var irCommand = _ir.sources[src];
      if (!irCommand) {
        return _rsvp.Promise.reject('Unknown command for source ' + src);
      }

      return this._irUtil.sendCommand.apply(this, irCommand);
    }
  }]);

  return IrService;
}();

exports.default = IrService;