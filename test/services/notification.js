'use strict';

import NotificationService from '../../app/services/notification';
import {assert} from 'chai';
import sinon from 'sinon';

describe('NotificationService Service', () => {
  let service;
  
  beforeEach(() => {
    service = new NotificationService('WEIRDHOST', 1234);
  });

  it('should be an object', () => {
    assert.isObject(service);
  });

  describe('when sending notification', () => {
    it('should make HTTP POST request', () => {
      service.notify('yo', 'hello');
    });

    it('should return a promise', () => {
      const p = service.notify('yo', 'hello');
      assert.isFunction(p.then);
    });

    describe('when notification request is successful', () => {
      beforeEach(() => {
        service = new NotificationService('johanwall.in', 80);
      });

      xit('should resolve the returned promise', (done) => {
        service.notify('yo', 'hello').then(() => {
          done();
        });
      });  
    });

    describe('when notification request fails', () => {
      it('should reject the returned promise', (done) => {
        service.notify('yo', 'hello').catch(() => { done(); });
      });  
    });
  });
});