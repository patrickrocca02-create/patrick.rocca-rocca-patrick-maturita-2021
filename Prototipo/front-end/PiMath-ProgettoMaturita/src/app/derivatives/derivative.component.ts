import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LambdaService} from '../service/lambdaService';
import {AuthService} from '../service/AuthService';

@Component({
  selector: 'app-derivative',
  templateUrl: './derivative.component.html',
  styleUrls: ['./derivative.component.css']
})
export class DerivativeComponent implements OnInit {

  resource = 'derivative';

  funValue = '';
  varValue = '';
  nValue = '';

  loading = false;

  errorMessage = '';
  error = false;

  constructor(private service: LambdaService, private router: Router) { }

  ngOnInit(): void {
    if (!AuthService.isServiceActive('Derivate')){
      this.router.navigate(['/login']);
    }
  }

  permormRequest(): void{
    this.loading = true;
    this.error = false;
    const fun = encodeURIComponent(this.funValue);
    const queryString = 'fun=' + fun + '&var=' + this.varValue + '&n=' + this.nValue + '&latex=True';
    document.querySelector('#output-container').classList.add('hidden');
    // @ts-ignore
    this.service.get(this.resource, queryString).subscribe((response: any) => {
      document.querySelector('#output-container').classList.remove('hidden');
      this.loading = false;
      document.querySelector('#input-label').innerHTML = '$f{\\left(x \\right)}=' + response.body.input + '$';
      // tslint:disable-next-line:triple-equals
      if (this.nValue == '1'){
        // tslint:disable-next-line:triple-equals
        document.querySelector('#output-label').innerHTML = '$\\frac{d}{dx} f{\\left(x \\right)}=' + response.body.solution + '$';
      }else{
        document.querySelector('#output-label').innerHTML = '$\\frac{d^{' + this.nValue + '}}{d x^{' + this.nValue + '}} f{\\left(x \\right)}=' + response.body.solution + '$';
      }
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
        this.errorMessage = 'L\'ordine della derivata inserito non è valido';
        break;
      case 10:
        this.errorMessage = 'Inserire tutti i parametri';
        break;
      case 12:
        this.errorMessage = 'La funzione inserita non è valida';
        break;
      case 13:
        this.errorMessage = 'La variabile rispetto a cui derivare inserita non è valida';
        break;
      case 14:
        this.errorMessage = 'La piattaforma non è in grado di calcolare questa derivata';
        break;
      case 15:
        this.errorMessage = 'Errore generico durante il calcolo della derivata, controllare i parametri inseriti';
        break;
    }
    this.error = true;
  }

}
