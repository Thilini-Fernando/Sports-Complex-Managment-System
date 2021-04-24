import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient, private global:GlobalService) { }

  getPaymentDetails(){
    return this.http.get<any>(`${this.global.base_url}`+'payment/');
  }


  insertPaymentDetails(paymentVO){
    return this.http.post<any>(`${this.global.base_url}`+'payment/',paymentVO);
  }

  updatePaymentDetails(paymentVO){
    return this.http.put<any>(`${this.global.base_url}`+'payment/',paymentVO);
  }

 deletePayment(paymentId){
    return this.http.delete<any>(`${this.global.base_url}`+`payment/${paymentId}`);
  }

}
