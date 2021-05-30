import {Injectable} from '@angular/core';

declare function updateMathExpressions(): any;

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  static goBack = false;
}
