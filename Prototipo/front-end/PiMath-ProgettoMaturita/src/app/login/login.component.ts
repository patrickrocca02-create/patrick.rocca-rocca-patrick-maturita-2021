import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LambdaService} from '../service/lambdaService';
import {DBService} from '../service/DBService';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  error = false;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private dbService: DBService) { }

  ngOnInit(): void {
  }

  submit(): void {
    const formValues = this.formLogin.value;
    this.authService.login(formValues.username, btoa(formValues.password)).subscribe(
      (response: any) => {
        this.error = false;
        AuthService.loggedIn = true;
        this.router.navigate(['home']);
      },
      ((error: any) => {
        AuthService.loggedIn = false;
        this.error = true;
      })
    );
  }
}
