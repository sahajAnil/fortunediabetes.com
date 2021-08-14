import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private http:HttpClient) { }


  ngOnInit() {
    
    console.log("from Anil Appointment");
    let response = this.http.get("http://localhost:8080/findAllAppointments");
    response.subscribe((data)=>console.log(data));
  }

}
