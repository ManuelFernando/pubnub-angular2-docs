import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: "appComponent",
  template: "<ul>" +
  "<li *ngFor='let item of PubNub.getMessage(Channel)'>{{item.message}}</li>" +
  "</ul>"
})
export class AppComponent {
  PubNub: PubNubAngular;
  Channel: string;
  constructor(pubnub: PubNubAngular) {
    this.Channel = 'myChannel';
    this.PubNub = pubnub;
    this.PubNub.init({publishKey: 'YOUR PUB_KEY', subscribeKey: 'YOUR SUB_KEY'});
    this.PubNub.subscribe({channels: [this.Channel], triggerEvents: ['message']});
  }
  ngOnInit() {
    setInterval(() => {
      let hw = 'Hello World, ' + Date.now();
      this.PubNub.publish({channel: this.Channel, message: hw});
    }, 1000);
  }
}
