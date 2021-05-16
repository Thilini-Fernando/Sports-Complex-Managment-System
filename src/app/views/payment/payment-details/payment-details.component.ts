import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PaymentModel } from '../../../Models/payment-model';
import { PaymentService } from '../../../Services/payment.service';
import { ToastrService } from 'ngx-toastr';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';  

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
        payment.paymentId = paymentDetail.id;
        this.PaymentDetails.push(payment);
      });
      
    }, err => {
      console.log("data", err)
    })
  }

  paymentId:number
  deletePayment(paymentId){
 console.log("dee",paymentId)
    this.paymentId = paymentId
    this.deleteModal.show();
  }

 
  DeleteOk(){
    this.paymentService.deletePayment( this.paymentId).subscribe(data=>{
      this.getdata();
      this.toastr.success("Successfully deleted..!")  
    },err=>{
console.log("aaaaaaaaaaaaa",err)
    },()=>{
console.log("333333333333333333")
    })
  }


  generatePdf(){
  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
 
   }

   clickPrint(id){
    
    // this.paymentService.reportGeneration( this.reportForm.value.fromdate, this.reportForm.value.todate, this.reportForm.value.type).subscribe(data=>{
      
    //   this.paymentData = data.result.paymentVOList
     
    // })
   }


}
