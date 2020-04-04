import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewEmpoyeesComponent } from './view-empoyees/view-empoyees.component';


const routes: Routes = [
  {
    path: '',
    children:[{
      path:'registration',
      component:RegistrationComponent
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
