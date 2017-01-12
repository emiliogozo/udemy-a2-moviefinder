import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apiKey: string;

  constructor(private _json: Jsonp) {
    this.apiKey = 'b4454e08aa50230625ebe574da595e0f';
    console.log('MovieService Initialized...');
  }

  getPopular() {
    return this._json.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  getInTheaters() {
    return this._json.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-09-26&primary_release_date.lte=2016-10-30&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  searchMovies(searchStr: string) {
    return this._json.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popuplarity.desc&api_key=' + this.apiKey)
      .map(res => res.json());
  }
}
