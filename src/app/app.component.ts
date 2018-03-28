import { Component, OnInit } from '@angular/core';
import { ShowTimes } from './showtimes';
import { MoviesDataService } from './shared/movies-data.service';
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
export class AppComponent implements OnInit {
  title = 'Movie Showtimes';
  theaters = ['ARCLIGHT', 'PACIFIC THEATERS', 'AMC'];
  results = [];

  constructor(private _moviesDataService: MoviesDataService) {}

  ngOnInit() {

    this._moviesDataService.getShowtimes()
    .switchMap(res => {

      const showtimes = res[0].showtimes;
      const id = Object.keys(showtimes);
      this._moviesDataService.getMovieData(id);
      return Observable.zip(
        this._moviesDataService.getMovieData(id),
        Observable.of(showtimes)
      );
    })
    .subscribe(([movies, showtimes]) => {
      const showtimeId = Object.keys(showtimes);
      for (let i = 0; i < showtimeId.length; i++ ) {
        this.results.push(
          {
            poster: movies[showtimeId[i]].poster,
            title: movies[showtimeId[i]].title,
            rating: movies[showtimeId[i]].rating
          });
      }
    });

  }

}
