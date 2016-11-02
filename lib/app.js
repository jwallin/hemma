'use strict';

var _notification = require('./config/notification');

var _irCommand = require('./app/utils/ir-command');

var _irCommand2 = _interopRequireDefault(_irCommand);

var _ir = require('./app/services/ir');

var _ir2 = _interopRequireDefault(_ir);

var _notification2 = require('./app/services/notification');

var _notification3 = _interopRequireDefault(_notification2);

var _input = require('./app/controllers/input');

var _input2 = _interopRequireDefault(_input);

var _cec = require('./app/controllers/cec');

var _cec2 = _interopRequireDefault(_cec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeCEC = require('nodecec');


var cec = new NodeCEC();

var irService = new _ir2.default(_irCommand2.default);
var notificationService = new _notification3.default(_notification.notification);
var inputController = new _input2.default(irService, notificationService);
var cecController = new _cec2.default(cec, inputController);

cecController.start();