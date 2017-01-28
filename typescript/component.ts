import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
@Component({
  selector: 'AppComponent',
  template: '<H1>PubNub Angular2 SDK Demo</H1>',
  providers:[ PubNubAngular ]
})
export class AppComponent {
  constructor() {}
}
