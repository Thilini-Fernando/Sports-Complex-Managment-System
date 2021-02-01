import { Component, OnInit, ViewChild } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { ViewemployeeService } from '../../../Services/viewemployee.service';
import { JsonPipe } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';



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
  view: boolean = true;


  constructor(private viewEmpService: ViewemployeeService, private router: Router) { }

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

  editUser(employee) {
    this.router.navigate(['/employee/registration/' + employee.id]);
    this.view = false

  }


  deleteUser() {
    this.deleteModal.show();
  }

}
