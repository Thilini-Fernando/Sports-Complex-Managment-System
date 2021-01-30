import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmpoyeesComponent } from './view-empoyees/view-empoyees.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';


const routes: Routes = [
  {
    path: '',
    children:[{
      path:'registration/:id',
      component:EmpRegistrationComponent
    },
    {
      path:'viewemployees',
      component:ViewEmpoyeesComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
