'use strict';

import http from 'http';
import querystring from 'querystring';
import {Promise} from 'rsvp';

class NotificationService {
  constructor() {}

  notify(title, message) {
    const options = {
      host: 'localhost',  //Move to config file
      port: '8080',
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