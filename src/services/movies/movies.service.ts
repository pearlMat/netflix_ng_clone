import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewMovie(movie) {
    return this.firestore.collection('movies').add(movie);
  }
 
  read_movies() {
    return this.firestore.collection('movies').snapshotChanges();
  }


 getMovieOnSearch(title){
 
  
    return this.firestore.collection(
      'movies',
      ref =>
          ref
      
         .where('title', '==', title)
        );
 }

 
  update_movie(movieID,movie){
    this.firestore.doc('movie/' + movieID).update(movie);
  }

   get_movie(id){
   // this.firestore.doc('movies/' + id).get(id);
    return this.firestore.doc(`movies/${id}`);


  }
 
  delete_movie(movie_id) {
    this.firestore.doc('movies/' + movie_id).delete();
  }
}
 
