import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
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
  }
}
