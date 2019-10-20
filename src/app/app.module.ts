import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from '../services/auth/authentication.service';
import { MovieService } from '../services/movies/movies.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NotfoundComponent } from '../pages/notfound/notfound.component';

import { FIREBASE_CONFIG } from "./firebase.config";

@NgModule({
  declarations: [
  NavbarComponent,
  FooterComponent,
  ProfileComponent,
  LandingComponent,
  NotfoundComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG ),
    AppRoutingModule
  ],
  providers: [AuthenticationService, AngularFirestore,  MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
