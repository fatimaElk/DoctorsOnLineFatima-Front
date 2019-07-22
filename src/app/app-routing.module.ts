import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsListComponent } from './components/doctorList/trips-list.component';
import { CartComponent } from './components/cart/cart.component';

// appellé ds <router-outlet> ds app.component.html
// TABLE DE ROUTAGE
const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'details/:id', component: DoctorDetailsComponent},
  {path: 'list', component: TripsListComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
