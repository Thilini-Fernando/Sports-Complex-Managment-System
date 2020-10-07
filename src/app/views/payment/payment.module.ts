import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentSubmissionComponent } from './payment-submission/payment-submission.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import {ReactiveFormsModule }  from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [PaymentSubmissionComponent, PaymentDetailsComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DataTablesModule,
  ]
})
export class PaymentModule { }
