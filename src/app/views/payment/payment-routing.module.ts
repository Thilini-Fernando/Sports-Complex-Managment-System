import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentSubmissionComponent } from './payment-submission/payment-submission.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { GuestpaymentsubmissionComponent } from './guestpaymentsubmission/guestpaymentsubmission.component';

const routes: Routes = [
  {
    path: '',
    children:[{
      path:'paymentsubmission',
      component:PaymentSubmissionComponent
    },
    {
      path:'paymentdetails',
      component:PaymentDetailsComponent
    },
    {
      path:'guestpaymentsubmission',
      component:GuestpaymentsubmissionComponent
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class PaymentRoutingModule { }
