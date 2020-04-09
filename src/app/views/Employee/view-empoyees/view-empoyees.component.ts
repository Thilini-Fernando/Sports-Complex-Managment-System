import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { ViewemployeeService } from '../../../Services/viewemployee.service';



// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-empoyees',
  templateUrl: './view-empoyees.component.html',
  styleUrls: ['./view-empoyees.component.css']
})
export class ViewEmpoyeesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
 
 
  dtTrigger = new Subject();
  
  profileForm: any;


  constructor(private viewEmpService:ViewemployeeService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.ViewEmployee();
  }

    ViewEmployee() {
  
  
      this.viewEmpService.getemployeedetails().subscribe(data=>{
        console.log("DATAAAAAAAAAAAAAA", data)
      },err=>{
  
      },()=>{
        
      })
  }

}
