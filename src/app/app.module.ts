import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LoadingIndicatorModule, CompilerModule, TextEditorModule } from 'angular-lib';

import { AppComponent } from './app.component';
import { CookieXSRFStrategy } from '../../angular-lib/node_modules/@angular/http/src/backends/xhr_backend';
import { RequestOptions } from '../../angular-lib/node_modules/@angular/http/src/base_request_options';
import { XSRFStrategy } from '../../angular-lib/node_modules/@angular/http/src/interfaces';
import { APP_BASE_HREF } from '../../angular-lib/node_modules/@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompilerModule,
    HttpModule,
    LoadingIndicatorModule,
    TextEditorModule,
  ],
  providers: [
    //{ provide: APP_BASE_HREF, useValue: '/' },
    { provide: XSRFStrategy, useValue: cookieStrategy },
    //{ provide: RequestOptions, useValue: {} }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function cookieStrategy() {
  return  new CookieXSRFStrategy('csrftoken', 'X-CSRFToken');
}
