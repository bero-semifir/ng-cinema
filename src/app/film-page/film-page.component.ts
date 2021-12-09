import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/models/film';
import { FilmService } from '../shared/services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {

  films!: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films)=> this.films = films);
  }

}
