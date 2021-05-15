import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';


const routes: Routes = [

  {
    path: '',
    children:[{
      path:'addreservation/:id',
      component:AddReservationComponent
    },
    {
      path:'viewreservation',
      component:ViewReservationComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
