import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration-service.service';
import { Registration } from '../models/registration';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css']
})
export class FormRegistrationComponent implements OnInit {

  regModel: Registration;

  constructor(private regService: RegistrationService) {
    this.regModel = (this.regService.type == 'save' ) ? new Registration() : this.regService.selectedRow ;
  }

	countries: string[] = ['US', 'UK', 'India', 'UAE'];

  ngOnInit() {
  }

  onSave(){
    this.regService.onCreate(this.regModel);
  }

}
