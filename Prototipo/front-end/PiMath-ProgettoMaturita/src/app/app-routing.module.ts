import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DerivativeComponent} from './derivative/derivative.component';
import {DiffEquationsComponent} from './diff-equations/diff-equations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'derivative', component: DerivativeComponent },
  { path: 'diff-equations', component: DiffEquationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
