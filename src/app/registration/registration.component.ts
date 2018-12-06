import { Component, OnInit } from '@angular/core';
import { Registration } from '../models/registration';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor(){
  	this.registrations.push(new Registration('Johan', 'Peter', {year: 1980, month: 5, day: 12}, 'johan@gmail.com', 'johan123', 'UK'));
		this.registrations.push(new Registration('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'tariq123', 'UAE'));
		this.registrations.push(new Registration('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'nirmal123', 'India'));
  }

    // It maintains list of Registrations
  registrations: Registration[] = [];

  ngOnInit() {
  }

  
}
