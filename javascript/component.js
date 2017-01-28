(function (app) {
  app.appComponent = ng.core.Component(
    {
      selector: 'appComponent',
      template: '<H1>PubNub Angular2 SDK Demo</H1>'
      providers: [ PubNubAngular ]
    }
  ).Class({
    constructor: function () {}
  });
})(window.app || (window.app = {}));
