import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/Movie";
import {MovieService} from "../service/movie.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies !: Movie[];

  constructor(private movieService: MovieService, private route: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  public getMovies(): void {
    this.movieService.getMovies().subscribe(
      (response: any) => {
        this.movies = response.results;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  clickMovie(movieId: number) {
    this.route.navigate([`details/${movieId}`]);
  }

  public searchMovies(key: string): void {
    const results: Movie[] = [];
    for (const movie of this.movies) {
      if (movie.original_title.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(movie);
      }
    }
    this.movies = results;
    if (results.length === 0 || !key) {
      this.getMovies();
    }
  }

  public searchMovie(keyword: string): void {
    this.movieService.getMovieByKeyword(keyword).subscribe(
      (response: any) => {
        this.movies = response.results;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
