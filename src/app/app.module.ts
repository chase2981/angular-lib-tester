import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingIndicatorModule } from 'angular-lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingIndicatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
