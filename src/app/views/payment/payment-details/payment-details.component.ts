import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private pay: PaymentService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.pay.getPaymentDetails().subscribe(data => {
      console.log("data", data)
    }, err => {
      console.log("data", err)
    })
  }

}
