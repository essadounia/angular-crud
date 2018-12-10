import { Injectable } from '@angular/core';
import { Registration } from '../models/registration';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registrations : Registration[] = [];

  type: String = 'Save';

  selectedIndex : number = 0;

  selectedRow : Registration ;

  constructor(private router: Router) {
    this.type = 'Save';

    this.registrations.push(new Registration('Johan', 'Peter', {year: 1980, month: 5, day: 12}, 'johan@gmail.com', 'johan123', 'UK'));
		this.registrations.push(new Registration('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'tariq123', 'UAE'));
    this.registrations.push(new Registration('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'nirmal123', 'India'));

    this.selectedRow = new Registration();
  }

  onDelete(index){
    console.log('#___________Service Registrations onDelete  with '+index);
    this.registrations.splice(index, 1);
  }

  onEdit(index){
    console.log('#___________Service Registrations onEdit  with '+index);
    this.type = 'Update';
    this.selectedRow = this.registrations[index];
    this.selectedIndex = index;
    this.router.navigate(['/editRegister/'+index]);
  }

  onCreate(regModel){
    if(this.type == 'Save'){
      console.log('#___________Service Registrations onCreate with '+regModel);
      this.registrations.push(regModel);
    }else {
      console.log('#___________Service Registrations onUpdate with '+regModel);
      this.registrations[this.selectedIndex] = this.selectedRow;
    }
    this.router.navigate(['/registrations']);    
  }

  getRegistrations(){
    return this.registrations;
  }
}
