import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
@Component({
  selector: 'appComponent',
  template: '<H1>PubNub Angular2 SDK Demo</H1>'
})
export class AppComponent {
  constructor(pubnub: PubNubAngular) {
  pubnub.init({
    publishKey: 'YOUR PUB_KEY',
    subscribeKey: 'YOUR SUB_KEY'
    });
  }
}
