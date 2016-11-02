'use strict';

import {Promise} from 'rsvp';
import {sources} from '../../config/ir';

class IrService {
  constructor(irUtil) {
    this._irUtil = irUtil;
  }

  sendSourceCommand(src) {
      const irCommand = sources[src];
      if (!irCommand) {
        return Promise.reject('Unknown command for source ' + src);
      }

      return this._irUtil.sendCommand.apply(this, irCommand);
  }
}

export default IrService;