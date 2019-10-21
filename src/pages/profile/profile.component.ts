import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { MovieService } from '../../services/movies/movies.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    id: any;
    movie: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
    	        private movieService: MovieService, private toastr: ToastrService
    	) {
    	this.id = this.activatedRoute.snapshot.params.id;
    	this.getMovie();
     }
  

  getMovie(){
  	  this.movieService.get_movie(this.id).valueChanges().subscribe((movie: any) => {
       
        this.movie = movie;
    
        });
  }

  addToFavourites(){
 let key =  this.movie.id;

sessionStorage.setItem(key, JSON.stringify(this.movie));
    this.toastr.success('Movie added to favourite!', 'EMP. Register');
  }
 
    

    ngOnInit() {

      

    	
    	
    }

}
