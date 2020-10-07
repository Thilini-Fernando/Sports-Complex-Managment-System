import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [AddReservationComponent, ViewReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    ModalModule
  ]
})
export class ReservationModule { }
