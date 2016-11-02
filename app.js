var NodeCEC = require('nodecec')
import {notification} from './config/notification';

import irUtil from './utils/ir-command';
import IRService from './services/ir';
import NotificationService from './services/notification';
import InputController from './controllers/input';
import CECController from './controllers/cec';

var cec = new NodeCEC();

var irService = new irService(irUtil);
var inputController = new InputController()
var cecController = new CECController()