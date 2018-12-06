import { Component, OnInit } from '@angular/core';
import { Registration } from '../models/registration'
@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css']
})
export class FormRegistrationComponent implements OnInit {

  constructor() { 
    this.regModel = new Registration();
  }

  // It maintains list of Registrations
	registrations: Registration[] = [];
	// It maintains registration Model
	regModel: Registration;
	// It maintains registration form display status. By default it will be false.
	showNew: Boolean = false;
	// It will be either 'Save' or 'Update' based on operation.
	submitType: string = 'Save';
	// It maintains table row index based on selection.
	selectedRow: number;
	// It maintains Array of countries.
	countries: string[] = ['US', 'UK', 'India', 'UAE'];

  ngOnInit() {
  }

	onNew() { 
  	this.regModel = new Registration();

  	this.submitType = 'Save';

  	this.showNew = true;
  }

  onEdit(Number:number){
    console.log('#____ Update Registration number '+Number);
  }

  onDelete(Number:number){
    console.log('#____ Delete Registration number '+Number);
  }

  onSave(){
    console.log('#________ ON SAVE CLICKED');
    console.log(this.regModel);
  }
}
