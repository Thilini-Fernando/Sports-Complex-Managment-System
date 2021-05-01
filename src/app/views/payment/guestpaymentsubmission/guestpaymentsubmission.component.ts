import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentModel } from '../../../Models/payment-model';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-guestpaymentsubmission',
  templateUrl: './guestpaymentsubmission.component.html',
  styleUrls: ['./guestpaymentsubmission.component.css']
})
export class GuestpaymentsubmissionComponent implements OnInit {
  paymentForm:FormGroup;
  memberListNew: PaymentModel = new PaymentModel();

  constructor( private pay: PaymentService, public toastr: ToastrService) { 
    this.paymentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      paymentStatus: new FormControl(''),
      amount: new FormControl('', [Validators.required]),
      paymentDate: new FormControl('', [Validators.required]),
      nic: new FormControl('', [Validators.required]),
      mobile: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  SavePayment() {
    if (this.paymentForm.invalid) {
      this.toastr.warning("Please fill all mandatory details")
    } else {
      this.memberListNew.memberId = 0
      this.memberListNew.guestName = this.paymentForm.value.name
      this.memberListNew.amount = this.paymentForm.value.amount
      this.memberListNew.date = this.paymentForm.value.paymentDate
      this.memberListNew.status = this.paymentForm.value.paymentStatus
      this.memberListNew.guestMobile = this.paymentForm.value.mobile
      this.memberListNew.guestNIC = this.paymentForm.value.nic

console.log("ggggggg",this.memberListNew)
      this.pay.insertPaymentDetails(this.memberListNew).subscribe(data => {
        this.toastr.success("Successfully inserted..")
        this.ResetForm();
      }, err => {
        this.toastr.error("Somethng went wrong", err)
      }, () => {

      })
    }

  }

  ResetForm(){
    this.paymentForm.reset()
   
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
