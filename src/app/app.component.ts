import { Component, OnInit } from '@angular/core';
import { ShowTimes } from './showtimes';
import { MoviesDataService } from './movies-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesDataService]
})
export class AppComponent implements OnInit{
  // loadedCharater = {}
  title = 'Movie Showtimes';
  results = {
    movieTitle: [],
    rating: [],
    poster: []
  };

  constructor(private _moviesDataService: MoviesDataService){}

  ngOnInit() {
    this._moviesDataService.getShowtimes()
    .switchMap(res => {
      const showtimes = res[0].showtimes;
      const id = Object.keys(showtimes);
      this._moviesDataService.getMovieData(id)
      return Observable.zip(
        this._moviesDataService.getMovieData(id),
        Observable.of(showtimes)
      )
    })
    .subscribe(([movies, showtimes]) => {
      const showtimeId = Object.keys(showtimes);
      // this.results = [movies]

      for(let i = 0; i < showtimeId.length; i++ ){
        this.results.movieTitle.push(movies[showtimeId[i]].title);
        this.results.rating.push(movies[showtimeId[i]].rating);
        this.results.poster.push(movies[showtimeId[i]].poster);
      }
    })

  }

}
