import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentServiceService {

  constructor(private http:HttpClient) { }

  
  public doAppointment(appoint){
    return this.http.post("http://localhost:8080/addAppointment",appoint,{responseType:'text' as 'json'});
  }
}
