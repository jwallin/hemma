'use strict';

import {SOURCE} from '../../app/constants'

class InputController {
  constructor(irService, notificationService) {
    this._irService = irService;
    this._notificationService = notificationService;
    this._sourceValues = Object.keys(SOURCE).map((k) => { return SOURCE[k]; });
  }
  nextSource() {
    const currentSourceIndex = this._sourceValues.indexOf(this._source);
    const nextSourceIndex = (currentSourceIndex + 1) % this._sourceValues.length;
    return this.setSource(this._sourceValues[nextSourceIndex]);
  }
  setSource(src) {
    this._source = src;
    return this._irService.sendSourceCommand(src)
      .then(() => {
        return this._notificationService.notify('Audio source', src);
      }).catch((e) => {
        return this._notificationService.notify('Could not set audio source', e);
      });
  }
  getSource() {
    return this._source;
  }
  getSources() {
    return this._sources;
  }
}

export default InputController;