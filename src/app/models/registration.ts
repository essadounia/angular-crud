import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Registration {

	constructor(
  	public firstname:String = '',
  	public lastname: String = '',
  	public dob: NgbDateStruct = null,
  	public email: String = '',
  	public password: String = '',
  	public country: String = 'Select country'
  ) { }
}