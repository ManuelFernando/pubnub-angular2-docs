(function (app) {
  app.appComponent = ng.core.Component(
    {
      selector: 'appComponent',
      template: '<H1>PubNub Angular2 SDK Demo</H1>'
    }
  ).Class({
    constructor: [PubNubAngular, function(pubnubService){
      pubnubService.init(
        {
          publishKey: 'YOUR PUB_KEY',
          subscribeKey: 'YOUR SUB_KEY'
        }
      );
    }]
  });
})(window.app || (window.app = {}));
