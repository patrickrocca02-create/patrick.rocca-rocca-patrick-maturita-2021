import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Service} from '../service/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private service: Service) { }

  ngOnInit(): void {}
  ngAfterViewInit(): void{
    this.service.updateMathExpressions();
  }

}
