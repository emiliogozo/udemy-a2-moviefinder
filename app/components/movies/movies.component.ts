import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html'
})
export class MoviesComponent  {
  popularList: Array<Object>;
  theaterList: Array<Object>;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

    this._movieService.getInTheaters().subscribe(res => {
      this.theaterList = res.results;
    });
  }
}
