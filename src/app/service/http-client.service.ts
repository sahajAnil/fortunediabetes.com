import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { BookAppointmentComponent } from '../book-appointment/book-appointment.component';

export class Appointment {
  constructor(
    public  id: string,
    public  firstName: string,
    public  lastName: string,
    public  phoneNumber: string,
    public  email: string
  ) {
  }
}

// This is a service class
@Injectable({
  providedIn: 'root'
})

export class HttpClientService{

  constructor(
    private httpClient: HttpClient
  ) { }

  getAppointment(){
      console.log('Test Call');
      return this.httpClient.get<Appointment[]>('http://localhost:8081/productsweb');
  }
}