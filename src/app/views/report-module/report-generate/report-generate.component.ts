import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PaymentService } from '../../../Services/payment.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report-generate',
  templateUrl: './report-generate.component.html',
  styleUrls: ['./report-generate.component.css']
})
export class ReportGenerateComponent implements OnInit {
  fromdate:string;
  todate:string;
  reportForm:FormGroup;

  constructor(private paymentService:PaymentService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.reportForm = new FormGroup({
      fromdate: new FormControl('', [Validators.required]),
      todate: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    })
  }

  generatePdf(){
    if(this.reportForm.invalid){
      console.log("gggggg",this.reportForm)
      this.toastr.warning("Please fill all details")
    }else{
      this.paymentService.reportGeneration( this.reportForm.value.fromdate, this.reportForm.value.todate, this.reportForm.value.type).subscribe(data=>{
        console.log("XXXXXXXXXX", data)
      })
      const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
      // pdfMake.createPdf(documentDefinition).open();
    }

 
   }

   selectType(e){
    this.reportForm.controls.type.setValue(e.target.value);
   }

}
