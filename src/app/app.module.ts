import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { }
