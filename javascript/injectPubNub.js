(function (app) {
    app.appComponent = ng.core.Component({
        selector: 'appComponent',
        templateUrl: 'app/template.html',
        providers: [ PubNubAngular ]
    }).Class({
        constructor: [PubNubAngular, function(pubnubService){
          pubnubService.init({
              publishKey: 'YOUR PUB_KEY',
              subscribeKey: 'YOUR SUB_KEY'
            });
        }]
    });
})(window.app || (window.app = {}));
