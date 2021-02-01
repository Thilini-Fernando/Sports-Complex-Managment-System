import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ViewEmpoyeesComponent } from './view-empoyees/view-empoyees.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { daysInMonth } from 'ngx-bootstrap/chronos/units/month';
import { BsDatepickerInlineContainerComponent } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [ ViewEmpoyeesComponent, EmpRegistrationComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule, 
    ReactiveFormsModule ,
    DataTablesModule,
    ModalModule.forRoot(),    
    ToastrModule.forRoot()
  ]
})
export class EmployeeModule { }
