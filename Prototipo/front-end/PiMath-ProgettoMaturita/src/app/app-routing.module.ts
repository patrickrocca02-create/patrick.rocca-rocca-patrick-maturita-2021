import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DerivativeComponent} from './derivatives/derivative.component';
import {DiffEquationsComponent} from './diff-equations/diff-equations.component';
import {EquationsComponent} from './equations/equations.component';
import {InequalitiesComponent} from './inequalities/inequalities.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TopicsComponent} from './topics/topics.component';
import {ChaptersComponent} from './chapters/chapters.component';
import {ChapterComponent} from './chapter/chapter.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'equations', component: EquationsComponent },
  { path: 'inequalities', component: InequalitiesComponent },
  { path: 'derivatives', component: DerivativeComponent },
  { path: 'diff-equations', component: DiffEquationsComponent},
  { path: 'topics', component: TopicsComponent },
  { path: 'chapters', component: ChaptersComponent },
  { path: 'chapter', component: ChapterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
