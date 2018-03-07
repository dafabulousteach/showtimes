import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShowTimes, Times } from './showtimes';
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
    let results = {
      titles: []
    };


    function getTitles(value) {
      movieID.forEach(el => {
        if(el === value.id){
          console.log('theres a match');
          results.titles.push(value.title);
        }
      });
      console.log('results are: ', results);
      return results;
    }
    return this._http.get<any>(this._moviesURL)
    // .map(list => {
    //   let r = list.filter(getTitles);
    //   return r;
    // })

      // return list.find(
        // return title, rating, and poster
    //     // movieID.forEach(function(element){
    //     //   console.log('element is: ', element);
    //     //   el.id === element
        // })


    // .do(data => console.log('data is: ', data));
    // this.persons =  this.personService.getPersons()
    // .filter(x => x.id == this.personId);
      // return _moviesURL.filter(function(el){
      //   console.log(el.indexOf(id.toLowerCase()) > -1);
      // });
  }

}
