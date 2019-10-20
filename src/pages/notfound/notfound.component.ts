import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { MovieService } from '../../services/movies/movies.service';
@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss']
})

export class NotfoundComponent implements OnInit {
    id: any;
    movie: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
    	        private movieService: MovieService
    	) {
    	
    	
     }
  


    

    ngOnInit() {

      

    	
    	
    }

}
