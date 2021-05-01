import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Service} from '../service/service';

@Component({
  selector: 'app-diff-equations',
  templateUrl: './diff-equations.component.html',
  styleUrls: ['./diff-equations.component.css']
})
export class DiffEquationsComponent implements OnInit, AfterViewInit {

  resource = 'differential-eq';

  eqValue = '';

  errorMessage = '';
  error = false;

  constructor(private service: Service) { }

  ngOnInit(): void {}
  ngAfterViewInit(): void{
    this.service.updateMathExpressions();
  }

  permormRequest(): void{
    this.error = false;
    const eq = this.service.transformEquation(this.eqValue);
    const queryString = 'eq=' + eq + '&latex=True';
    // @ts-ignore
    this.service.get(this.resource, queryString).subscribe((response: any) => {
        document.querySelector('#output-container').classList.remove('hidden');
        document.querySelector('#input-label').innerHTML = '$' + response.body.input + '$';
        document.querySelector('#output-label').innerHTML = '$' + response.body.solution + '$';
        this.service.updateMathExpressions();
      },
      (error: any) => {
        document.querySelector('#output-container').classList.add('hidden');
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
