import { Component, OnInit,ViewChild} from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { ViewemployeeService } from '../../../Services/viewemployee.service';
import { JsonPipe } from '@angular/common';
import {ModalDirective} from 'ngx-bootstrap/modal';



// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-empoyees',
  templateUrl: './view-empoyees.component.html',
  styleUrls: ['./view-empoyees.component.css']
})
export class ViewEmpoyeesComponent implements OnInit {
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;
  
  dtOptions: DataTables.Settings = {};
  employeeList = [];


  dtTrigger = new Subject();

  profileForm: any;


  constructor(private viewEmpService: ViewemployeeService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.ViewEmployee();
  }

  ViewEmployee() {

    this.viewEmpService.getemployeedetails().subscribe(data => {
      this.employeeList = data.result;
    }, err => {

    }, () => {

    })
  }

  deleteUser(){
    console.log("delete User=====");
    this.deleteModal.show();
  }

  editUser(){
    console.log("Edit User ======");
    this.editModal.show();
  }

}
