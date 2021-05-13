import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import {User} from '../domain/User';
import {DBService} from './DBService';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
  static loggedIn = false;
  static activeServices = [];

  static user: User = {
      username: null,
      password: null
    };

    static isServiceActive(serviceName: string): boolean{
      let isActive = false;
      AuthService.activeServices.forEach(service => {
        if (service === serviceName){
          isActive = true;
        }
      });
      return isActive;
    }

   static getOptions(): any{
      return {
        // tslint:disable-next-line:max-line-length
        headers: new HttpHeaders().append('Authorization', 'Basic ' + btoa(AuthService.user.username + ':' + AuthService.user.password)).append('Access-Control-Allow-Origin', '*')
      };
    }

    login(username: string, password: string): Observable<any> {
      AuthService.user.username = username;
      AuthService.user.password = password;
      // tslint:disable-next-line:max-line-length
      const data = 'username=' + encodeURIComponent(AuthService.user.username) + '&password=' + encodeURIComponent(AuthService.user.password);
      const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'});
      return this.http.post(DBService.URL + 'login', data, {headers});
    }

   logout(): Observable<any> {
      AuthService.loggedIn = false;
      AuthService.activeServices = [];
      return this.http.get(DBService.URL + 'logout', AuthService.getOptions());
    }
}
