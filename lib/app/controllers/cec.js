'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CECController = function () {
  function CECController(cec, inputController) {
    _classCallCheck(this, CECController);

    this._cec = cec;
    this._inputController = inputController;
  }

  _createClass(CECController, [{
    key: 'start',
    value: function start() {
      this._cec.start();

      this._cec.on('error', function (e) {
        console.log('CEC Error: ', e);
      });

      this._cec.on('key', this.onKey);
    }
  }, {
    key: 'onKey',
    value: function onKey(event) {
      console.log('Key event', event);
    }
  }]);

  return CECController;
}();

exports.default = CECController;