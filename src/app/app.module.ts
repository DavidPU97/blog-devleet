import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import awsconfig from '../aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import { AuthComponentComponent } from './auth/auth-component/auth-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


// Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    NavbarComponent,
    BlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
