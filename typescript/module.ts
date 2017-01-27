import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PubNubAngular } from 'pubnub-angular2';
import { AppComponent } from './appComponent';
@NgModule({
    imports:[ BrowserModule ],
    declarations:[ AppComponent ],
    providers:[ PubNubAngular ],
    bootstrap:[ AppComponent ]
})
export class AppModule {
  constructor() {}
}
