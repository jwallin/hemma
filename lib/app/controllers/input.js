'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('../../app/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputController = function () {
  function InputController(irService, notificationService) {
    _classCallCheck(this, InputController);

    this._irService = irService;
    this._notificationService = notificationService;
    this._sourceValues = Object.keys(_constants.SOURCE).map(function (k) {
      return _constants.SOURCE[k];
    });
  }

  _createClass(InputController, [{
    key: 'nextSource',
    value: function nextSource() {
      var currentSourceIndex = this._sourceValues.indexOf(this._source);
      var nextSourceIndex = (currentSourceIndex + 1) % this._sourceValues.length;
      return this.setSource(this._sourceValues[nextSourceIndex]);
    }
  }, {
    key: 'setSource',
    value: function setSource(src) {
      var _this = this;

      this._source = src;
      return this._irService.sendSourceCommand(src).then(function () {
        return _this._notificationService.notify('Audio source', src);
      }).catch(function (e) {
        return _this._notificationService.notify('Could not set audio source', e);
      });
    }
  }, {
    key: 'getSource',
    value: function getSource() {
      return this._source;
    }
  }, {
    key: 'getSources',
    value: function getSources() {
      return this._sources;
    }
  }]);

  return InputController;
}();

exports.default = InputController;