export class Movie{
  adult : boolean;
  id : number;
  original_language : string;
  original_title : string;
  overview : string;
  popularity : number;
  poster_path : string;
  vote_average : number;

  constructor(adult: boolean, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path: string, vote_average: number) {
    this.adult = adult;
    this.id = id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
  }
}
