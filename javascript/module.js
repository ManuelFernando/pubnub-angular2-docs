'use strict';
(function (app) {
    app.appModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [app.appComponent],
        providers: [ PubNubAngular ],
        bootstrap: [app.appComponent]
    }).Class({
        constructor: function(){}
    });
    document.addEventListener('DOMContentLoaded', function(){
        ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(app.appModule);
    });
})(window.app || (window.app = {}));
