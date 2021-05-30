import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LambdaService} from '../service/LambdaService';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';
import {RouterService} from '../service/RouterService';

@Component({
  selector: 'app-diff-equations',
  templateUrl: './diff-equations.component.html',
  styleUrls: ['./diff-equations.component.css']
})
export class DiffEquationsComponent implements OnInit, AfterViewInit {

  resource = 'differential-eq';

  eqValue = '';

  loading = false;

  errorMessage = 'Error';
  error = false;

  constructor(private service: LambdaService, private router: Router) {
    if (!AuthService.isServiceActive('Equazioni Differenziali')){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    RouterService.goBack = true;
  }
  ngAfterViewInit(): void{
    this.service.updateMathExpressions();
  }

  permormRequest(): void{
    document.querySelector('#output-container').classList.add('hidden');
    this.loading = true;
    this.error = false;
    const eq = encodeURIComponent(this.eqValue);
    const queryString = 'eq=' + eq + '&latex=True';
    // @ts-ignore
    this.service.get(this.resource, queryString).subscribe((response: any) => {
      this.loading = false;
      document.querySelector('#output-container').classList.remove('hidden');
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
      case 10:
        this.errorMessage = 'Inserire tutti i parametri';
        break;
      case 12:
        this.errorMessage = 'L\'equazione differenziale inserita non è valida';
        break;
      case 14:
        this.errorMessage = 'La piattaforma non è in grado di risolvere quest\'equzione';
        break;
      case 15:
        this.errorMessage = 'Errore generico durante la risoluione dell\'equazione, controllare i parametri inseriti';
        break;
    }
    this.error = true;
  }

}
