'use strict';

class CECController {
  constructor(cec, inputController) {
    this._cec = cec;
    this._inputController = inputController;
  }
  start() {
    this._cec.start();

    this._cec.on('error', (e) => {
      console.log('CEC Error: ', e);
    });

    this._cec.on('key', this.onKey);
  }

  onKey(event) {
    console.log('Key event', event);
  }
}

export default CECController;