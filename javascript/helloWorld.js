(function (app) {
  app.main_component = ng.core.Component({
    selector: 'appComponent',
    template: "<ul>" +
    "<li *ngFor='let item of PubNub.getMessage(channel)'>{{item.message}}</li>" +
    "</ul>"
  }).Class({
    constructor: [PubNubAngular, function(pubnub) {
      this.channel = 'my_channel';
      this.pubnub = pubnub;
      this.pubnub.init({publishKey: 'YOUR PUB_KEY', subscribeKey: 'YOUR SUB_KEY'});
      this.pubnub.subscribe({channels: [this.channel], triggerEvents: ['message']});
    }],
    ngOnInit: function () {
      var self = this;
      setInterval(function () {
        var hw = 'Hello World, ' + Date.now();
        self.pubnub.publish({channel: self.channel, message: hw});
      }, 1000);
    }
  });
})(window.app || (window.app = {}));
