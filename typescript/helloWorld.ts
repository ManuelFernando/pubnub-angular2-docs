import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: "appComponent",
  template: "<ul>" +
  "<li *ngFor='let item of PubNub.getMessage(channel)'>{{item.message}}</li>" +
  "</ul>"
})
export class AppComponent {
  pubnub: PubNubAngular;
  channel: string;
  constructor(pubnub: PubNubAngular) {
    this.channel = 'myChannel1';
    this.pubnub = pubnub;
    this.pubnub.init({publishKey: 'YOUR PUB_KEY', subscribeKey: 'YOUR SUB_KEY'});
    this.pubnub.subscribe({channels: [this.channel], triggerEvents: ['message']});
  }
  ngOnInit() {
    setInterval(() => {
      let hw = 'Hello World, ' + Date.now();
      this.pubnub.publish({channel: this.channel, message: hw});
    }, 1000);
  }
}
