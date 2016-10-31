'use strict';

const chai = require('chai');
import {assert} from 'chai';
import sinon from 'sinon';

import InputController from '../../app/controllers/input';
import {SOURCE} from '../../app/constants';

describe('InputController', () => {
  let controller;
  let irServiceMock;
  beforeEach(() => {
    irServiceMock = {
      sendSourceCommand: sinon.spy()
    };
    controller = new InputController(irServiceMock);
  });

  it('should be an object', () => {
    assert.isObject(controller);
  });

  describe('when toggling input source', function() {
    it('should set the current source', function() {
      controller.nextSource();
      assert.equal(controller.getSource(), SOURCE.SPOTIFY);
    });

    it('should set the current source again', function() {
      controller.nextSource();
      controller.nextSource();
      assert.equal(controller.getSource(), SOURCE.TV);
    });

    describe('when running it n times', () => {
      xit('should should have a defined input source');
    });

    it('should send command to toggle input', function() {
      controller.nextSource();
      assert(irServiceMock.sendSourceCommand.calledWith(SOURCE.SPOTIFY));
    });

    xit('should show notification', function() {

    });


    describe('when an error occurs', () => {
      xit('should show a notification', () => {
        
      });
    });
  });
});