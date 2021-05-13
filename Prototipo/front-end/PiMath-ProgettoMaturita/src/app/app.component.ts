import { Component } from '@angular/core';
import {AuthService} from './service/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiMath-ProgettoMaturita';

  constructor(private authService: AuthService, private router: Router) {
  }

  logout(): any{
    this.authService.logout();
    this.router.navigate(['login']);
  }

  getLoggedIn(): boolean{
    return AuthService.loggedIn;
  }
}
