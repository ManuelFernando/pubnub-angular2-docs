import {Component} from '@angular/core';
import {PubNubAngular} from 'pubnub-angular2';

@Component({
  selector: 'AppComponent',
  template: '<H1>PubNub Angular2 SDK Demo</H1>'
})

export class AppComponent {
  constructor(pubnubService: PubNubAngular) {
    pubnubService.init({
      publishKey: 'YOUR PUB_KEY',
      subscribeKey: 'YOUR SUB_KEY'
    });

    pubnubService.getInstance('another').init({
      publishKey: 'ANOTHER PUB_KEY',
      subscribeKey: 'ANOTHER SUB_KEY'
    });

    pubnubService.publish({
      message: {such: 'Hello!'},
      channel: 'myChannel'
    }, (status, response) => {
      if (status.error) {
        console.log(status);
      } else {
        console.log('message Published w/ timetoken', response.timetoken);
      }
    });

    pubnubService.getInstance("another").grant({
      channels: ['my_channel'],
      authKeys: ['my_authkey'],
      read: true,
      write: false
    }, (status) => {
      console.log(status);
    });
  }
}
