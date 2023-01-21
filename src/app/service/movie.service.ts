import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieDetails} from "../models/MovieDetails";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  public getMovies(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8");
  }

  public getMovieById(movieId: Number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8`)
  }

  public getMovieByKeyword(keyword: string): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8&language=fr&query=${keyword}&page=1`)
  }
}
