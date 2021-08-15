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
  messages:any;
  message:any;

  constructor(private service:BookAppointmentServiceService) { }

  ngOnInit() {
  }
    public submit(){
      let resp=this.service.doAppointment(this.Appoint);
      resp.subscribe((data)=>this.messages=data);
      this.message ="You have succesfully booked appointment!";

        }
}
