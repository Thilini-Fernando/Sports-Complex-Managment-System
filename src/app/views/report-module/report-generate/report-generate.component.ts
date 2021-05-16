import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PaymentService } from '../../../Services/payment.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';  
import { PaymentModel } from '../../../Models/payment-model';


@Component({
  selector: 'app-report-generate',
  templateUrl: './report-generate.component.html',
  styleUrls: ['./report-generate.component.css']
})
export class ReportGenerateComponent implements OnInit {
  fromdate:string;
  todate:string;
  reportForm:FormGroup;
  paymentData:PaymentModel[] = []; 
  reportHide:boolean = true;

  constructor(private paymentService:PaymentService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.reportHide = true
    this.reportForm = new FormGroup({
      fromdate: new FormControl('', [Validators.required]),
      todate: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    })
  }

  generatePdf(){
  
  
    console.log("NNNNNNNNN", this.paymentData)
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

   selectType(e){
    this.reportHide = false
    this.reportForm.controls.type.setValue(e.target.value);
    this.paymentService.reportGeneration( this.reportForm.value.fromdate, this.reportForm.value.todate, this.reportForm.value.type).subscribe(data=>{
      console.log("XXXXXXXXXX", this.paymentData)
      this.paymentData = data.result.paymentVOList
     
    })
   }

}
