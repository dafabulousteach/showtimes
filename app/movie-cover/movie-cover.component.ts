import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css'],
  providers:[MoviesDataService]
})
export class MovieCoverComponent implements OnInit {

  constructor(private _moviesDataService: MoviesDataService) { }

  ngOnInit() {

  }

}
