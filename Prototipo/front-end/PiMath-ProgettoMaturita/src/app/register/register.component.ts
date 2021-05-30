import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';
import {DBService} from '../service/DBService';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterService} from '../service/RouterService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    plan: new FormControl()
  });

  error = false;
  errorMessage = '';

  plans = [];

  constructor(private http: HttpClient, private dbService: DBService, private router: Router) { }

  ngOnInit(): void {
    RouterService.goBack = false;
    this.dbService.getPlans().subscribe(
      (result) => {
        this.plans = result;
      },
      (error) => {
        this.errorMessage = 'Errore di connessione al DataBase';
        this.error = true;
      }
    );
  }

  submit(): void {
    const formValues = this.formRegister.value;
    this.error = false;
    if (formValues.password !== formValues.confirmPassword){
      this.errorMessage = 'Le password non corrispondono';
      this.error = true;
    }else {
      const user = {
        username: formValues.username,
        password: btoa(formValues.password),
        email: formValues.email,
        name: formValues.name,
        surname: formValues.surname,
        plan: formValues.plan
      };
      this.dbService.register(user).subscribe(
        (response: any) => {
          AuthService.user.username = user.username;
          AuthService.user.password = user.password;
          AuthService.loggedIn = true;
          this.router.navigate(['home']);
        },
        ((error: any) => {
          AuthService.loggedIn = false;
          this.error = true;
          this.errorMessage = 'errore';
        })
      );
    }
  }
}
