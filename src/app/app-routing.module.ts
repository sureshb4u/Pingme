import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';

const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterationComponent },
  { path:'home', component: HomeComponent,
  children: [ 
    { path: '', redirectTo: '/home/(aside:dashboard)', pathMatch: 'full' },
    {path: 'dashboard', outlet:'aside', component: DashboardComponent}, 
    {path: 'contacts', outlet:'aside', component: ContactsComponent}, 
    //{path: 'profile', component: ArtistAlbumListComponent},
    //{path: 'mailTemplate', component: ArtistAlbumListComponent}, 
    {path: 'messages', outlet:'aside', component: MessagesComponent}, 
  ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
