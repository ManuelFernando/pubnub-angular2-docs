import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
@Component({
    selector: 'AppComponent',
    templateUrl: 'app/template.html',
    providers:[ PubNubAngular ]
})
export class AppComponent {
  constructor() {}
}
