import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

declare function updateMathExpressions(): any;

@Injectable({
  providedIn: 'root'
})
export class Service{

  URL = 'https://p4plvbcqfa.execute-api.eu-south-1.amazonaws.com/API/';

  constructor(private http: HttpClient){

  }

  transformEquation(eq: string): string{
     eq = this.replaceAll(eq, '!', '%21');
     eq = this.replaceAll(eq, '*', '%2A');
     eq = this.replaceAll(eq, '+', '%2B');
     eq = this.replaceAll(eq, '-', '%2D');
     eq = this.replaceAll(eq, '/', '%2F');
     eq = this.replaceAll(eq, '<', '%3C');
     eq = this.replaceAll(eq, '=', '%3D');
     eq = this.replaceAll(eq, '>', '%3E');
     eq = this.replaceAll(eq, '^', '%5E');
     return eq;
  }

  // tslint:disable-next-line:variable-name
  replaceAll(string: string, searchValue: string, replaceValue: string): string{
    while (string.includes(searchValue)){
      string = string.replace(searchValue, replaceValue);
    }
    return string;
  }

  // @ts-ignore
  get(resource: string, queryString: string): Observable<any>{
    return this.http.get(this.URL + resource + '?' + queryString, {observe: 'response'});
  }

  updateMathExpressions(): void {
    updateMathExpressions();
  }
}
