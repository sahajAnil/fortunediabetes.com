import { Component, OnInit } from '@angular/core';
import { appoint } from '../appoint';
import { BookAppointmentServiceService } from '../book-appointment-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Appoint: appoint=new appoint("","","","");
  message:any;
  messages:any;

  constructor(private service:BookAppointmentServiceService) { }

  ngOnInit() { }
  public submit(){
    let resp=this.service.doAppointment(this.Appoint);
    resp.subscribe((data)=>this.messages=data);
    this.message ="You have succesfully booked appointment!";
      }
}
