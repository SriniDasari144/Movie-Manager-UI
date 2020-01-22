import { Component, OnInit } from '@angular/core';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  movies: any;
  headElements: any;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.headElements = ['Title', 'Year', 'Rating', 'Review', 'Renre', 'Country', 'Copies'];
    this.movieService.getMovie('http://localhost:4200/movie')
    .subscribe((result: any) => {
      console.log(result);
      this.movies = result;
    });
  }

}
