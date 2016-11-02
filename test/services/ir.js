'use strict';

import IRService from '../../app/services/ir';
import {assert} from 'chai';
import sinon from 'sinon';
import {Promise} from 'rsvp';

import {sources} from '../../config/ir';
import {SOURCE} from '../../app/constants';

describe('IR Service', () => {
  let service;
  let irUtilMock;
  beforeEach(() => {
    irUtilMock = {
      sendCommand: sinon.mock().returns(Promise.resolve())
    };
    service = new IRService(irUtilMock);
  });

  it('should be an object', () => {
    assert.isObject(service);
  });

  describe('when setting source', () => {
    it('should invoke sendCommand', ()=> {
      service.sendSourceCommand(SOURCE.TV);
      const config = sources[SOURCE.TV];
      assert(irUtilMock.sendCommand.calledWith(config[0], config[1]), 'Should be called with correct args');
    });

    it('should return a promise', () => {
      const p = service.sendSourceCommand(SOURCE.TV);
      assert.isFunction(p.then);
    });
  });

  describe('when setting source command for unknown source', () => {
    it('should return rejected promise', (done) => {
      service.sendSourceCommand('keps').catch(() => {
        done();
      });
    });
  });
});