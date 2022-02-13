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
import { CreateBlogComponent } from './blogpost/create-blog/create-blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyBlogsComponent } from './blogpost/my-blogs/my-blogs.component';


// Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    NavbarComponent,
    BlogpostComponent,
    CreateBlogComponent,
    MyBlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
