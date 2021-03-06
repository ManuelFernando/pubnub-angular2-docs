(function (app) {
  app.appComponent = ng.core.Component(
    {
      selector: 'appComponent',
      template: '<H1>PubNub Angular2 SDK Demo</H1>'
    }
  ).Class({
    constructor: [PubNubAngular, function(pubnub){
      pubnub.init({
        publishKey: 'YOUR PUB_KEY',
        subscribeKey: 'YOUR SUB_KEY'
      });

      pubnub.getInstance("another").init({
        publishKey: 'ANOTHER PUB_KEY',
        subscribeKey: 'ANOTHER SUB_KEY'
      });

      pubnub.publish({
        message: {such: 'Hello!'},
        channel: 'my_channel'
      }, function (status, response) {
        if (status.error) {
          console.log(status);
        } else {
          console.log('message Published w/ timetoken', response.timetoken);
        }
      });

      pubnub.getInstance('another').grant({
        channels: ['my_channel'],
        authKeys: ['my_authkey'],
        read: true,
        write: false
      }, function (status) {
        console.log(status);
      });
    }]
  });
})(window.app || (window.app = {}));
