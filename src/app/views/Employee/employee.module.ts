import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ViewEmpoyeesComponent } from './view-empoyees/view-empoyees.component';


@NgModule({
  declarations: [RegistrationComponent, ViewEmpoyeesComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
