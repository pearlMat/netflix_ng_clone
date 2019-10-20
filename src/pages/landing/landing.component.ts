import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies/movies.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  movies: any
  movie: any;
  searchTitle: string;


  constructor(private movieService: MovieService, private router: Router) { }

  gotoMovieProfilePage() {
    this.router.navigate(['/movieProfile'], {state: {data: this.movies.id}});
  }

   getMovie(){
  	/*  this.movieService.getMovieOnSearch(this.searchTitle).valueChanges().subscribe((movie: any) => {
       
        this.movie = movie;
    
        });*/

      for(var i = 0; i < this.movies.length; i++)
{ 
   if(this.movies[i].title == this.searchTitle) {
   	 this.movie = this.movies[i];
   	  this.viewMovie();
   }
}
 
 if(this.movie == null) {

 this.gotoNotFoundPage();
 }
  	 
  }

viewMovie(){
	 this.router.navigate(['/movie/', this.movie.id]);
}

gotoNotFoundPage(){
	 this.router.navigate(['/nosearchresult']);

}


  ngOnInit() {
  	 this.movieService.read_movies().subscribe(data => {
 
      this.movies = data.map(e => {
        return {
          id: e.payload.doc.id,
          image: e.payload.doc.data()['image'],
          
          title: e.payload.doc.data()['title'],
          year: e.payload.doc.data()['year'],
          released: e.payload.doc.data()['released'],
          genre: e.payload.doc.data()['genre'],
          rating: e.payload.doc.data()['rating'],
          writer: e.payload.doc.data()['writer'],
          director: e.payload.doc.data()['director'],
          stars: e.payload.doc.data()['stars'],
          pg: e.payload.doc.data()['pg'],
          plot: e.payload.doc.data()['plot'],
          runtime: e.payload.doc.data()['runtime'],
        };
      })
      console.log(this.movies);
 
    });
  }

}
