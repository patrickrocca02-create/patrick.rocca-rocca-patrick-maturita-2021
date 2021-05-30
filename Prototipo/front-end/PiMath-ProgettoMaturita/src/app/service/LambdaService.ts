import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

declare function updateMathExpressions(): any;

@Injectable({
  providedIn: 'root'
})
export class LambdaService {

  URL = 'https://p4plvbcqfa.execute-api.eu-south-1.amazonaws.com/API/';

  constructor(private http: HttpClient){ }

  // @ts-ignore
  get(resource: string, queryString: string): Observable<any>{
    return this.http.get(this.URL + resource + '?' + queryString, {observe: 'response'});
  }

  updateMathExpressions(): void {
    updateMathExpressions();
  }
}
