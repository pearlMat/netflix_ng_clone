import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../pages/profile/profile.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';


const routes: Routes = [
{ path: 'movie/:id', component: ProfileComponent },
{path: 'nosearchresult', component: NotfoundComponent },
{ path: 'home', component: LandingComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
