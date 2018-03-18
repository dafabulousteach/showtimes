import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesDataService } from './shared/movies-data.service';
import { MockMoviesDataService } from './shared/movies-data.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [
        AppComponent
      ],
      providers:[
        {provide: MoviesDataService,
        useValue: MockMoviesDataService}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
