import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-generate',
  templateUrl: './report-generate.component.html',
  styleUrls: ['./report-generate.component.css']
})
export class ReportGenerateComponent implements OnInit {
  fromdate:string;
  todate:string;
  reportForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reportForm = new FormGroup({
      fromdate: new FormControl(''),
      todate: new FormControl(''),
      type: new FormControl(''),
    })
  }

}
