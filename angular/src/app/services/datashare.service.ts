import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }

  public user: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

}
