import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url:string;

  constructor(private http:HttpClient) {
    // this.base_url = "http://localhost:8080/Zodiac";
    this.base_url = "http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac";

  }

  getUsers():Observable<User[]>{
    // return this.http.get(`http://localhost:8080/Zodiac/user`) as Observable<User[]>;
      return this.http.get(`${this.base_url}/user`) as Observable<User[]>;

  };

  getUser(id:number) {
    // return this.http.get(`http://localhost:8080/Zodiac/user`) as Observable<User[]>;
    return this.http.get(`${this.base_url}/user/${id}`) as Observable<User>;
  };

  login(user: User): Observable<User> {
    return this.http.post(`${this.base_url}/login`, user) as Observable<User>;
  }

  logout(user: User) {
    sessionStorage.clear();
    return this.http.get(`${this.base_url}/login`);
  }

  register(user: User): Observable<User> {
    return this.http.post(`${this.base_url}/user`, user) as Observable<User>;
  }

  update(user: User): Observable<User> {
    return this.http.put(`${this.base_url}/user`, user) as Observable<User>;
  }

  follow(id: number, user: User): Observable<any> {
    return this.http.put(`${this.base_url}/add/${id}`, user);
  }

  unfollow(id: number, user: User): Observable<any> {
    return this.http.put(`${this.base_url}/remove/${id}`, user);
  }

}
