import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentModel } from '../../../Models/payment-model';
import { MemberService } from '../../../Services/member.service';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-payment-submission',
  templateUrl: './payment-submission.component.html',
  styleUrls: ['./payment-submission.component.css']
})
export class PaymentSubmissionComponent implements OnInit {
  memberListNew: PaymentModel = new PaymentModel();
  Name: string
  JoinedDate: Date
  NIC: string
  Sports: any

  paymentForm = new FormGroup({
    memberId: new FormControl('', [Validators.required]),
    paymentStatus: new FormControl(''),
    amount: new FormControl('', [Validators.required]),
    paymentDate: new FormControl('', [Validators.required]),
    // nic: new FormControl(''),
    // gender: new FormControl('')
  });
  constructor(private memberService: MemberService, private pay: PaymentService, public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  GetMemberDetails() {
    this.memberService.getMemberWiseDetails(this.paymentForm.value.memberId).subscribe(data => {

      this.Name = data.result.firstName + ' ' + data.result.lastName
      this.JoinedDate = data.result.joinedDate
      this.NIC = data.result.nic
      this.Sports = data.result.sportName

    }, err => {

    }, () => {

    })

  }


  SavePayment() {
    if (this.paymentForm.invalid) {
      this.toastr.warning("Please fill all mandatory details")
    } else {
      this.memberListNew.memberId = this.paymentForm.value.memberId
      this.memberListNew.amount = this.paymentForm.value.amount
      this.memberListNew.date = this.paymentForm.value.paymentDate
      this.memberListNew.status = this.paymentForm.value.paymentStatus


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
    this.Name = null
    this.Sports = null
    this.JoinedDate = null
    this.NIC = null
  }
}