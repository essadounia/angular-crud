import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registrations :any[] = [];

  constructor(private regService: RegistrationService){
  	this.registrations = regService.getRegistrations();
  }

  ngOnInit(){

  }

  onDelete(index){
    this.regService.onDelete(index);
  }

  onEdit(index){
    this.regService.onEdit(index);
  }
}
