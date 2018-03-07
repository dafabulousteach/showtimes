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
  results : {

  }

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
    // .filter(([movies, showtimes]) => movies.id == Object.keys(showtimes)[0])
    .subscribe(([movies, showtimes]) => {
      const movieId = Object.keys(movies); // -> ["######", "########", "#######"]
      const showtimeId = Object.keys(showtimes);
      console.log('movies: ', movies);
      // console.log('showtimeId is: ',showtimeId);
      // movieId.filter(el => movieId)
      for(let i in movies){
        console.log(movies[i].hasownProperty(showtimeId[0]));
        // console.log('movies[i]: ', movies[i]);
        // console.log('movieId is: ', movieId);

      }
      for(let i = 0; i< movieId.length; i++){
        // console.log('movieId[i]: ', movieId[i]);
        // showtimes[movieId[i]] -> keep this
        // console.log('showtimes[movieId[i]]: ', showtimes[movieId[i]]);
      }

    })

  }

}
