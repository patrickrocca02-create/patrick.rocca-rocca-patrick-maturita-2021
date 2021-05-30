import { Component } from '@angular/core';
import {AuthService} from './service/AuthService';
import {RouterService} from './service/RouterService';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiMath-ProgettoMaturita';

  constructor(private authService: AuthService, private router: Router, private location: Location) {
  }

  logout(): any{
    this.authService.logout();
    this.router.navigate(['login']);
  }

  getLoggedIn(): boolean{
    return AuthService.loggedIn;
  }

  goBackAvailable(): boolean{
    return RouterService.goBack;
  }

  goBack(): any{
    this.location.back();
  }
}
