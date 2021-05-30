import { Component, OnInit } from '@angular/core';
import {LambdaService} from '../service/LambdaService';
import {Router} from '@angular/router';
import {AuthService} from '../service/AuthService';
import {RouterService} from '../service/RouterService';

@Component({
  selector: 'app-inequalities',
  templateUrl: './inequalities.component.html',
  styleUrls: ['./inequalities.component.css']
})
export class InequalitiesComponent implements OnInit {
  resource = 'inequality';

  ineqValue = '';
  varValue = '';
  symValue = '';

  loading = false;

  errorMessage = 'Error';
  error = false;

  constructor(private service: LambdaService, private router: Router) {
    if (!AuthService.isServiceActive('Disequazioni')){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    RouterService.goBack = true;
  }

  permormRequest(): void{
    this.loading = true;
    this.error = false;
    const ineq = encodeURIComponent(this.ineqValue);
    const queryString = 'ineq=' + ineq + '&var=' + this.varValue + '&sym=' + this.symValue + '&latex=True';
    document.querySelector('#output-container').classList.add('hidden');
    // @ts-ignore
    this.service.get(this.resource, queryString).subscribe((response: any) => {
        document.querySelector('#output-container').classList.remove('hidden');
        this.loading = false;
        document.querySelector('#input-label').innerHTML = '$' + response.body.input + '$';
        document.querySelector('#output-label').innerHTML = '$' + response.body.solution + '$';
        this.service.updateMathExpressions();
      },
      (error: any) => {
        this.loading = false;
        this.handleError(error.error.problem_id);
      });
  }

  handleError(problemID: number): void{
    switch (problemID){
      case 1:
        this.errorMessage = 'Il simbolo di disugualiganza inserito non è valido';
        break;
      case 2:
        this.errorMessage = 'Il simbolo di disugualiganza inserito non è stato trovato all\'interno della disequazione indicata';
        break;
      case 10:
        this.errorMessage = 'Inserire tutti i parametri';
        break;
      case 11:
        this.errorMessage = 'La disequazione non contiene la variabile inseita';
        break;
      case 12:
        this.errorMessage = 'La disequazione inserita non è valida';
        break;
      case 13:
        this.errorMessage = 'La variabile inserita non è valida';
        break;
      case 14:
        this.errorMessage = 'La piattaforma non è in grado di risolvere questa disequazione';
        break;
      case 15:
        this.errorMessage = 'Errore generico durante la risoluzione della disequazione, controllare i parametri inseriti';
        break;
    }
    this.error = true;
  }

}
