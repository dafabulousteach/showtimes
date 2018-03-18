import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MoviesDataService } from './movies-data.service';

describe('MoviesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [MoviesDataService]
    });
  });

  it('should be created', inject([MoviesDataService], (service: MoviesDataService) => {
    expect(service).toBeTruthy();
  }));
});
