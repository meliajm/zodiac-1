import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url:string;
  
  constructor(private http:HttpClient) {
    this.base_url = "http://localhost:8080/Zodiac/";
  }

  getUser(): Observable<User[]>{

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    }
    
    const requestOptions = {               
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.http.get(`${this.base_url}user`) as Observable<User[]>;
  };
}
