'use strict';

import http from 'http';
import querystring from 'querystring';
import {Promise} from 'rsvp';

class NotificationService {
  constructor(host, port) {
    this._host = host;
    this._port = port;
  }

  notify(title, message) {
    const options = {
      host: this._host,
      port: this._port,
      path: '/jsonrpc',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const payload = {
      jsonrpc: '2.0',
      method: 'GUI.ShowNotification',
      params: {
        title: title,
        message: message
      },
      id: 1
    };

    return new Promise((resolve, reject) => {
      const request = http.request(options, (res) => {
        console.log('response: ', res);
        resolve();
      }, (e) => {console.log('e')});

      const errorHandler = (e) => {
        console.log(e);
        reject(e);
      };

      request.on('error ', errorHandler);
      request.socket.on('error ', errorHandler);

      request.write(querystring.stringify(payload));
      request.end();
    });
  }
}

export default NotificationService;