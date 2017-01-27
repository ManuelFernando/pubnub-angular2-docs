import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
@Component({
    selector: 'AppComponent',
    templateUrl: 'app/template.html',
    providers:[ PubNubAngular ]
})
export class AppComponent {
  constructor(pubnubService: PubNubAngular) {
    pubnubService.init({
      publishKey: 'YOUR PUB_KEY',
      subscribeKey: 'YOUR SUB_KEY'
    });
  }
}
