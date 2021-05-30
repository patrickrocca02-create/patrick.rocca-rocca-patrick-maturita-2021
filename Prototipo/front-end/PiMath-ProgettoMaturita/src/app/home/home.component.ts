import {Component, DoCheck, OnInit} from '@angular/core';
import {LambdaService} from '../service/LambdaService';
import {DBService} from '../service/DBService';
import {Router} from '@angular/router';
import {AuthService} from '../service/AuthService';
import {RouterService} from '../service/RouterService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  services = [];
  firstName = 'Utente';

  constructor(private lambdaService: LambdaService, private dbService: DBService, private router: Router) {
  }

  ngOnInit(): void{
    RouterService.goBack = false;
    if (AuthService.loggedIn) {
      this.activateServices();
      this.dbService.getUserName(AuthService.user.username).subscribe( (result) => this.firstName = result );
    }else {
      this.router.navigate(['/login']);
    }
  }

  ngDoCheck(): void {
    this.lambdaService.updateMathExpressions();
  }

  activateServices(): void{
    this.dbService.getActiveServices().subscribe((response: any) => {
      response.forEach(getService => {
        AuthService.activeServices.push(getService.serviceName);
        this.services.push({id: getService.serviceID, name: getService.serviceName, description: getService.description});
      });
    },
      error => {
        this.router.navigate(['/login']);
      });
  }

  getServiceIndex(serviceName: string): number{
    let index = -1;
    this.services.forEach((service, i) => {
      if (service.name === serviceName){
        index = i;
      }
    });
    return index;
  }
  getService(serviceName: string): any{
    return this.services[this.getServiceIndex(serviceName)];
  }
  isServiceActive(serviceName: string): boolean{
    if (this.getServiceIndex(serviceName) !== -1){
      return true;
    }else{
      return false;
    }
  }
  getServiceDescription(serviceName: string): string{
    return this.getService(serviceName).description;
  }
}
