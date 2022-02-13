import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService, private router: Router) { 
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if(data.payload.event == 'signIn'){
        this.router.navigateByUrl('/blog');
      }
    })
  }

  ngOnInit(): void {
  
  }

  signOut(){
    this.authenticator.signOut()
    this.router.navigateByUrl('/login');
  }


}

