(function (app) {
    app.appComponent = ng.core.Component({
        selector: 'appComponent',
        templateUrl: 'app/template.html',
        providers: [ PubNubAngular ]
    }).Class({
        constructor: function () {}
    });
})(window.app || (window.app = {}));
