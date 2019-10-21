import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies/movies.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss']
})

export class FavouritesComponent implements OnInit {
  
  movies: any;
  movie: any;
  

  constructor(private movieService: MovieService, private router: Router) { }

  
 
viewMovie(){
	 this.router.navigate(['/movie/', this.movie.id]);
}




  ngOnInit() {
 


 if (sessionStorage.length > 0) {

 
 for (let i = 0; i < sessionStorage.length; i++){
    let key = sessionStorage.key(i);
 let item = JSON.parse(sessionStorage.getItem(key));
  
    this.movie = item;

     }
} 




}
  
  

}
