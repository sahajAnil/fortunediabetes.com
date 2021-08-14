import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookAppointmentServiceService } from '../book-appointment-service.service';
import { appoint } from '../appoint';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  
  Appoint: appoint=new appoint("","","","");
  message:any;

  constructor(private service:BookAppointmentServiceService) { }

  ngOnInit() {
    console.log("from Anil Book page Appointment");
  }
    public submit(){
      let resp=this.service.doAppointment(this.Appoint);
      resp.subscribe((data)=>this.message=data);
        }
}
