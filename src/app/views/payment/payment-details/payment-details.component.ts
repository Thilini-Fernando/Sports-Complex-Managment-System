import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PaymentModel } from '../../../Models/payment-model';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  PaymentDetails:PaymentModel = new PaymentModel();
  @ViewChild('deleteModal') public deleteModal: ModalDirective;

  constructor(private pay: PaymentService,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.pay.getPaymentDetails().subscribe(data => {
      console.log("dataaaaaaaa", data)
      this.PaymentDetails = data.result
    }, err => {
      console.log("data", err)
    })
  }

  memberId:number
  deletePayment(memberId){
    this.memberId = memberId
    this.deleteModal.show();
  }

 
  DeleteOk(){
    this.paymentService.deletePayment( this.memberId).subscribe(data=>{

    },err=>{
console.log("aaaaaaaaaaaaa",err)
    },()=>{
console.log("333333333333333333")
    })
  }


}
