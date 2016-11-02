var NodeCEC = require('nodecec')
import {notification} from './config/notification';

import irUtil from './app/utils/ir-command';
import IRService from './app/services/ir';
import NotificationService from './app/services/notification';
import InputController from './app/controllers/input';
import CECController from './app/controllers/cec';

const cec = new NodeCEC();

const irService = new IRService(irUtil);
const notificationService = new NotificationService(notification);
const inputController = new InputController(irService, notificationService)
const cecController = new CECController(cec, inputController);

cecController.start();