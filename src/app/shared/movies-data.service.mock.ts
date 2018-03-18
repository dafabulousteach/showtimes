import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MockMoviesDataService {
    movies: any = {};
    showtimes: any ={};
    constructor(){
      this.movies = {
        "440cc42b43bbcb8b5d38fbdede9e22f1": {
          "title": "The Great Wall",
          "rating": "PG-13",
          "poster": "https://dl.dropboxusercontent.com/s/0zs1xh77m9g0fmx/the_great_wall.jpg"
        },
        "b4c2c326a4d335da654d4fd944bf88d0": {
          "title": "Fifty Shades Darker",
          "rating": "R",
          "poster": "https://dl.dropboxusercontent.com/s/dt6wgt92cu9wqcr/fifty_shades_darker.jpg"
        },
        "f94447a9a91123041f6eb0679f01d80d": {
          "title": "Doctor Strange",
          "rating": "PG-13",
          "poster": "https://dl.dropboxusercontent.com/s/tt2523gcspjr7l7/doctor_strange.jpg"
        }
      }

      this.showtimes = {
        "id": "2030c64ce72b4e4605cb01f2ba405b7d",
        "name": "Arclight",
        "showtimes": {
          "b4c2c326a4d335da654d4fd944bf88d0": [
              "11:30 pm", "2:45 pm", "8:35 pm", "4:15 pm", "10:30 pm"
          ],
          "f94447a9a91123041f6eb0679f01d80d": [
              "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
          ],
          "56a14924d53cc5f82f75505b52deffbd": [
              "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
          ],
          "52208a5a1900898799ddef74d62ca710": [
              "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
          ],
          "bb768d6cd40339bd98c948be36ed8fe7": [
              "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
          ],
          "eb97596c1083cce466f1c664994983bb": [
              "11:00 am", "2:35 pm", "5:35 pm", "3:10 pm", "9:25 pm", "11:25 pm"
          ],
          "1150762c2724f57b7cf83b5cb5c9fad5": [
              "10:45 am", "12:15 pm", "5:40 pm", "11:20 am", "8:05 pm"
          ]
        }
      }
    }

    getShowtimes(): Observable<any> {
      return Observable.of(this.showtimes);
    }

    getMovieData(): Observable<any> {
      return Observable.of(this.movies);
    }
}
