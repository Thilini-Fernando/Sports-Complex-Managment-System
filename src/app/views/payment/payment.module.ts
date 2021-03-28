import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentSubmissionComponent } from './payment-submission/payment-submission.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import {ReactiveFormsModule }  from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';
import { GuestpaymentsubmissionComponent } from './guestpaymentsubmission/guestpaymentsubmission.component';

@NgModule({
  declarations: [PaymentSubmissionComponent, PaymentDetailsComponent, GuestpaymentsubmissionComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DataTablesModule,
  ]
})
export class PaymentModule { }
