import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { MovieService } from '../../services/movies/movies.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    id: any;
    movie: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
    	        private movieService: MovieService
    	) {
    	this.id = this.activatedRoute.snapshot.params.id;
    	this.getMovie();
     }
  

  getMovie(){
  	  this.movieService.get_movie(this.id).valueChanges().subscribe((movie: any) => {
       
        this.movie = movie;
    
        });
  }
    

    ngOnInit() {

      

    	
    	
    }

}
