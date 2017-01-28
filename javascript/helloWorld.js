(function (app) {
  app.main_component = ng.core.Component({
    selector: 'appComponent',
    template: "<ul>" +
    "<li *ngFor='let item of PubNub.getMessage(Channel)'>{{item.message}}</li>" +
    "</ul>"
  }).Class({
    constructor: [PubNubAngular, function(pubnub) {
      this.Channel = 'myChannel';
      this.PubNub = pubnub;
      this.PubNub.init({publishKey: 'YOUR PUB_KEY', subscribeKey: 'YOUR SUB_KEY'});
      this.PubNub.subscribe({channels: [this.Channel], triggerEvents: ['message']});
    }],
    ngOnInit: function () {
      var self = this;
      setInterval(function () {
        var hw = 'Hello World, ' + Date.now();
        self.PubNub.publish({channel: self.Channel, message: hw});
      }, 1000);
    }
  });
})(window.app || (window.app = {}));
