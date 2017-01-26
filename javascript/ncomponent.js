(function (app) {
    app.main_component = ng.core.Component({
        selector: 'main-component',
        templateUrl: 'app/template.html',
        providers: [PubNubAngular]
    }).Class({
        constructor: function () {}
    });
})(window.app || (window.app = {}));
