import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  user: any;
  userChanged: Subject<any> = new Subject<any>();


  setUser(user: any) {
		this.user = user;
		this.userChanged.next([this.user]);
	}
}
