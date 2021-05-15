import { Component, OnInit, ViewChild } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { ViewemployeeService } from '../../../Services/viewemployee.service';
import { JsonPipe } from '@angular/common';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../Services/employee.service';
import { ToastrService } from 'ngx-toastr';



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
  empId:number

  dtTrigger = new Subject();

  profileForm: any;
  view: boolean = true;


  constructor(private viewEmpService: ViewemployeeService, private router: Router,private empServce:EmployeeService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.ViewEmployee();
  }

  ViewEmployee() {

    this.viewEmpService.getemployeedetails().subscribe(data => {
      console.log("employeee",data)
      this.employeeList =  data.result.reverse()
      console.log("employeee",this.employeeList )

    }, err => {

    }, () => {

    })
  }

  editUser(employee) {
    this.router.navigate(['/employee/registration/' + employee.id]);
    this.view = false

  }


  
  deleteUser(id) {
    var config: ModalOptions = { class: 'modal-sm' };
    this.empId = id;
    this.deleteModal.show();
  }

  DeleteEmployee(){
    console.log("deletee",this.empId)
  this.empServce.DeleteEmployeeDetails(this.empId).subscribe(data=>{
  this.toastr.success("Successfully deleted..!")  
  },err=>{
    this.toastr.error("Something went wrong..!")  
  },()=>{
    this.ViewEmployee();
  })
  }

}
