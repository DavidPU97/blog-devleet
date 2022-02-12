import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import { Auth } from 'aws-amplify';
import { AuthClass } from '@aws-amplify/auth/lib-esm/Auth';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    

  }


}
