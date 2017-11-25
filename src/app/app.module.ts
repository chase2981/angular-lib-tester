import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingIndicatorModule, CompilerModule, TextEditorModule } from 'angular-lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompilerModule,
    LoadingIndicatorModule,
    TextEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
