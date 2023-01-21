import { Component } from '@angular/core';
import {MovieService} from "../service/movie.service";
import {ActivatedRoute} from "@angular/router";
import {MovieDetails} from "../models/MovieDetails";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  public movie !: MovieDetails;
  constructor(private movieService : MovieService, private  route : ActivatedRoute) {}

  ngOnInit(): void {
    const movieId : number = this.route.snapshot.params['id'];
    this.getProduct(movieId);
  }

  public getProduct(movieId : number): void {
    this.movieService.getMovieById(movieId).subscribe(
      (response: MovieDetails) => {
        this.movie = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
