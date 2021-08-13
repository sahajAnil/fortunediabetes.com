import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './doctorService/service.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component:HomeComponent},
  {path: 'Services', component:ServiceComponent},
  {path: 'Facilities', component:FacilitiesComponent} ,
  {path: 'Book-Appointment', component:BookAppointmentComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
