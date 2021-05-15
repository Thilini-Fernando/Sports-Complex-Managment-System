import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PaymentModel } from '../../../Models/payment-model';
import { PaymentService } from '../../../Services/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  // PaymentDetails:PaymentModel = new PaymentModel();
  PaymentDetails:PaymentModel[] = [];
  @ViewChild('deleteModal') public deleteModal: ModalDirective;

  constructor(private pay: PaymentService,private paymentService:PaymentService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.pay.getPaymentDetails().subscribe(data => {
      console.log("dataaaaaaaa", data.result)
      let result = data.result;
      result.forEach(paymentDetail => {
        let payment:PaymentModel = new PaymentModel();
        payment.amount = paymentDetail.amount;
        payment.date = paymentDetail.date;
        payment.guestMobile = paymentDetail.guestMobile;
        payment.guestName = paymentDetail.guestName;
        payment.guestNIC = paymentDetail.guestNIC;
        payment.memberId = paymentDetail.memberId;
        payment.MemberName = paymentDetail.name;
        payment.status = paymentDetail.status;
        this.PaymentDetails.push(payment);
      });
      
    }, err => {
      console.log("data", err)
    })
  }

  memberId:number
  deletePayment(memberId){
    console.log("payyyy",memberId)
    this.memberId = memberId
    this.deleteModal.show();
  }

 
  DeleteOk(){
    this.paymentService.deletePayment( this.memberId).subscribe(data=>{
      this.getdata();
      this.toastr.success("Successfully deleted..!")  
    },err=>{
console.log("aaaaaaaaaaaaa",err)
    },()=>{
console.log("333333333333333333")
    })
  }


}
