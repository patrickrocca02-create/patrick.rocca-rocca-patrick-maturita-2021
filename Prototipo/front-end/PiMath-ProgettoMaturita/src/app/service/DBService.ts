import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './AuthService';


@Injectable({
  providedIn: 'root'
})
export class DBService{

  static URL = 'http://localhost:8080/';
  option = {
    headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Content-Type', 'application/x-www-form-urlencoded'),
    responseType: 'text'
  };

  constructor(private http: HttpClient){}

  getAll(): Observable<any>{
    return this.http.get(DBService.URL + 'api/users/all', AuthService.getOptions());
  }

  getPlans(): Observable<any>{
    return this.http.get(DBService.URL + 'api/plans/all');
  }

  getActiveServices(): Observable<any>{
    return this.http.get(DBService.URL + 'api/services/available', AuthService.getOptions());
  }

  getAvailableTopics(): Observable<any>{
    return this.http.get(DBService.URL + 'api/topics/available', AuthService.getOptions());
  }

  getTopicContent(topicID): Observable<any>{
    return this.http.get(DBService.URL + 'api/topics/chapters/' + topicID, AuthService.getOptions());
  }

  getChapterText(topicID, chapterID): Observable<any>{
    const options = AuthService.getOptions();
    options.responseType = 'text';
    return this.http.get(DBService.URL + 'api/topics/chapter-text/' + topicID + '/' + chapterID, options);
  }

  getUserName(username): Observable<any>{
    const options = AuthService.getOptions();
    options.responseType = 'text';
    return this.http.get(DBService.URL + 'api/users/first-name/' + username, options);
  }

  register(user: any): Observable<any>{
    const data = {
      username: user.username,
      password: user.password,
      email: user.email,
      name: user.name,
      surname: user.surname,
      plan: {
        planID: user.plan
      }
    };
    console.log(data);
    AuthService.user.username = data.username;
    AuthService.user.password = data.password;
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(DBService.URL + 'api/users/register', JSON.stringify(data), {headers});
  }

}
