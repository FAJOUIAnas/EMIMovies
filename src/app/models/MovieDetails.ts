export class MovieDetails{
  adult : boolean;
  backdrop_path : string;
  budget : string;
  genres : any;
  id : number;
  original_language : string;
  original_title : string;
  overview : string;
  popularity : number;
  poster_path : string;
  release_date : string;
  runtime : number;
  vote_average : number;
  vote_count : number;

  constructor(adult: boolean, backdrop_path: string, budget: string, genres: any, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path: string, release_date: string, runtime: number, vote_average: number, vote_count: number) {
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.budget = budget;
    this.genres = genres;
    this.id = id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.runtime = runtime;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
