import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { profile } from 'console';
import { ToastrService } from 'ngx-toastr';
import { PaymentModel } from '../../../Models/payment-model';
import { MemberService}from '../../../Services/member.service';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-payment-submission',
  templateUrl: './payment-submission.component.html',
  styleUrls: ['./payment-submission.component.css']
})
export class PaymentSubmissionComponent implements OnInit
 {
  memberListNew:PaymentModel = new PaymentModel();
  Name:string
  JoinedDate:Date
  NIC:string
  Sports:any

  paymentForm = new FormGroup({
    memberId: new FormControl(''),
    paymentStatus: new FormControl(''),
    amount: new FormControl(''),
    paymentDate: new FormControl(''),
    // nic: new FormControl(''),
    // gender: new FormControl('')
  });
  constructor(private memberService: MemberService,private pay:PaymentService,public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  GetMemberDetails(){
    this.memberService.getMemberWiseDetails(this.paymentForm.value.memberId).subscribe(data => {

      this.Name = data.result.firstName + ''+data.result.lastName
      this.JoinedDate = data.result.joinedDate
      this.NIC = data.result.nic
      this.Sports = data.result.sportName

    }, err => {

    }, () => {
      
    })

}


SavePayment(){
this.memberListNew.memberId = this.paymentForm.value.memberId
this.memberListNew.amount = this.paymentForm.value.amount
this.memberListNew.date = this.paymentForm.value.paymentDate
this.memberListNew.remark = this.paymentForm.value.paymentStatus


this.pay.insertPaymentDetails(this.memberListNew).subscribe(data=>{
this.toastr.success("Successfully inserted..")
},err=>{
this.toastr.error("Somethng went wrong",err)
},()=>{

})
}
 }