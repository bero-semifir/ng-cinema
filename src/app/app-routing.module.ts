import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmPageComponent } from './film-page/film-page.component';

const routes: Routes = [
  {path:"", redirectTo: 'films', pathMatch: 'full'},
  {path: "films", component: FilmPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
