import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment-submission',
  templateUrl: './payment-submission.component.html',
  styleUrls: ['./payment-submission.component.css']
})
export class PaymentSubmissionComponent implements OnInit
 {

  // paymentForm = new FormGroup({
  //   memberId: new FormControl(''),
  //   paymentStatus: new FormControl(''),
  //   amount: new FormControl(''),
  //   paymentDate: new FormControl('')
  // });

  paymentForm = new FormGroup({
    memberId: new FormControl(''),
    paymentStatus: new FormControl(''),
    amount: new FormControl(''),
    paymentDate: new FormControl(''),
    // nic: new FormControl(''),
    // gender: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
