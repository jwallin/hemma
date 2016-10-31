'use strict';

import {SOURCE} from '../../app/constants'

class InputController {
  constructor(irService) {
    this._irService = irService;
    this._sourceValues = Object.keys(SOURCE).map((k) => { return SOURCE[k]; });
  }
  nextSource() {
    const currentSourceIndex = this._sourceValues.indexOf(this._source);
    const nextSourceIndex = (currentSourceIndex + 1) % this._sourceValues.length;
    this.setSource(this._sourceValues[nextSourceIndex]);
  }
  setSource(src) {
    this._source = src;
    this._irService.sendSourceCommand(src);
  }
  getSource() {
    return this._source;
  }
  getSources() {
    return this._sources;
  }
}

export default InputController;