'use strict';

const chai = require('chai');
import {assert} from 'chai';
import sinon from 'sinon';
import {Promise} from 'rsvp';

import CECController from '../../src/app/controllers/cec';
import {SOURCE} from '../../src/app/constants';

describe('CECController', () => {
  let controller;
  let cecMock, inputControllerMock;
  let listeners;

  beforeEach(() => {
    listeners = {};
    cecMock = {
      start: sinon.spy(),
      on: (evt, callback) => {
        listeners[evt] = callback;
      }
    };

    inputControllerMock = {
      //notify: sinon.spy()
    };
    
    controller = new CECController(cecMock, inputControllerMock);
  });

  it('should be an object', () => {
    assert.isObject(controller);
  });

  describe('when starting the controller', () => {
    beforeEach(() => {
      controller.start();
    });

    it('should start the CEC adapter', () => {
      assert.isTrue(cecMock.start.called);
    });

    it('should set up error listener', () => {
      assert.isFunction(listeners.error);
    });

    it('should set up key listener', () => {
      assert.isFunction(listeners.key);
    });
  });

  describe('when getting X key event from CEC', function() {
    beforeEach(() => {
      controller.start();
    });

    xit('should toggle audio source', function() {
      listeners.key({code: 31, name: 'play'});
      assert.equal(controller.getSource(), SOURCE.SPOTIFY);
    });
  });
});