import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PubNubAngular } from 'pubnub-angular2';
import { appComponent }  from './appComponent';
@NgModule({
    imports:      [BrowserModule],
    declarations: [appComponent],
    providers: [ PubNubAngular ],
    bootstrap:    [ appComponent ]
})
export class appModule {
    constructor(){
    }
}
