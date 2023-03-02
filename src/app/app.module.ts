import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFormGetformIoModule } from 'angular-form-getform-io';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularFormGetformIoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
