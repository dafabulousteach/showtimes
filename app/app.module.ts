import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterMoviePipe } from './filter-movie.pipe';
import { MovieCoverComponent } from './movie-cover/movie-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterMoviePipe,
    MovieCoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
