import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconRegistry, MatIconModule } from '@angular/material';
import { HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';
import { LoginService } from './login.service';
import { RegisterationComponent } from './registeration/registeration.component';
import { ApiConfigService } from './api-config.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    DashboardComponent,
    ContactsComponent,
    HomeComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginService, ApiConfigService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(maticonregistry: MatIconRegistry){
    
  }
}
