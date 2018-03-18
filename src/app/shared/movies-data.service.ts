import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShowTimes, Times } from '../showtimes';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class MoviesDataService {
  _showtimesURL = '../assets/data/theater_showtimes.json';
  _moviesURL = '../assets/data/movie_metadata.json';
  public results: {};
  constructor(private _http: HttpClient) { }

  getShowtimes (): Observable<ShowTimes> {
    return this._http.get<ShowTimes>(this._showtimesURL)
  }

  getMovieData (movieID: any[]) {
    return this._http.get<any>(this._moviesURL)
  }

}
