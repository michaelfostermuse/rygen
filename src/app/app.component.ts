import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'Rygen';
  searchTerm: string = 'Search term...';
  apiKey = '5885c445eab51c7004916b9c0313e2d3'
  apiBase = 'https://api.themoviedb.org/3/search/movie'
  imageUrlBase = 'https://api.themoviedb.org/3/configuration?api_key='
  movieList: any[] = [];

  constructor(private http: HttpClient) {}
    ngOnInit() {
  }

  testChange() {
    this.fetchMovies();
  }

  fetchMovies() {
   this.http
      .get(this.apiBase + '?api_key=' + this.apiKey + '&language=en-US&query=' + this.searchTerm + '&page=1&include_adult=false')
      .subscribe((movieList: any) => {
        this.movieList = movieList.results
      });
  }

  getImageUrl(imagePath:string) {
    return this.imageUrlBase + this.apiKey + "w300/" + imagePath
  }
}
