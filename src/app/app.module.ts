import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { FilmComponent } from './film-page/film/film.component';
import { SeancePageComponent } from './seance-page/seance-page.component';
import { SeanceComponent } from './seancePage/seance/seance.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { SallePageComponent } from './salle-page/salle-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmPageComponent,
    FilmComponent,
    SeancePageComponent,
    SeanceComponent,
    ClientPageComponent,
    SallePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
