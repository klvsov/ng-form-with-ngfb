import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NGGetformIoModule } from 'ng-getform-io';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NGGetformIoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
