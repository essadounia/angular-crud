import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component'

const routes: Routes = [
	{ path:'' , component: HomeComponent},
	{ path:'registrations' , component: RegistrationComponent},
	{ path:'editRegister/:id' , component: FormRegistrationComponent},
	{ path:'createRegister' , component: FormRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
