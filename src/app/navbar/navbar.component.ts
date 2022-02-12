import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService) { }

  user: any;

  ngOnInit(): void {
    /* this.gService.userChanged.subscribe({
      next: (user: any) => {
        this.user = user;
      }
    }); */
    onAuthUIStateChange((nextAuthState, authData) => {
      if (nextAuthState === AuthState.SignedIn) {
        console.log("user successfully signed in!");
        console.log("user data: ", authData);
      }
      if (!authData) {
        console.log("user is not signed in...");
      }
    });
    
  }
}

