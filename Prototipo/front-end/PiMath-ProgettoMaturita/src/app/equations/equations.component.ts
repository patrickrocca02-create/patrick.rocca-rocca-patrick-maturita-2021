import { Component, OnInit } from '@angular/core';
import {LambdaService} from '../service/lambdaService';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equations',
  templateUrl: './equations.component.html',
  styleUrls: ['./equations.component.css']
})
export class EquationsComponent implements OnInit {
  resource = 'equation';

  eqValue = '';
  unValue = '';

  loading = false;

  errorMessage = '';
  error = false;

  constructor(private service: LambdaService, private router: Router) {
    if (!AuthService.isServiceActive('Equazioni')){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

  permormRequest(): void{
    this.loading = true;
    this.error = false;
    const eq = encodeURIComponent(this.eqValue);
    const queryString = 'eq=' + eq + '&un=' + this.unValue + '&latex=True';
    document.querySelector('#output-container').classList.add('hidden');
    // @ts-ignore
    this.service.get(this.resource, queryString).subscribe((response: any) => {
        document.querySelector('#output-container').classList.remove('hidden');
        this.loading = false;
        if (this.eqValue.split('=').length === 1) {
          document.querySelector('#input-label').innerHTML = '$' + response.body.input + '=0$';
        }else{
          document.querySelector('#input-label').innerHTML = '$' + response.body.input + '$';
        }
        document.querySelector('#output-label').innerHTML = '$x\\in ' + response.body.solution + '$';
        this.service.updateMathExpressions();
      },
      (error: any) => {
        this.loading = false;
        this.handleError(error.error.problem_id);
      });
  }

  handleError(problemID: number): void{
    switch (problemID){
      case 10:
        this.errorMessage = 'Inserire tutti i parametri';
        break;
      case 11:
        this.errorMessage = 'L\'equazione non contiene l\'incognita indicata';
        break;
      case 12:
        this.errorMessage = 'L\'equazione inserita non è valida';
        break;
      case 13:
        this.errorMessage = 'L\'incognita inserita non è valida';
        break;
      case 14:
        this.errorMessage = 'La piattaforma non è in grado di risolvere quest\'equazione';
        break;
      case 15:
        this.errorMessage = 'Errore generico durante la risoluzione dell\'equazione, controllare i parametri inseriti';
        break;
    }
    this.error = true;
  }

}
