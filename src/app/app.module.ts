import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingIndicatorModule, CompilerModule } from 'angular-lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompilerModule,
    LoadingIndicatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
