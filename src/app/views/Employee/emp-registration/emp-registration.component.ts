import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeModel } from '../../../Models/employee-model';
import { EmployeeService } from '../../../Services/employee.service';
import { ViewemployeeService } from '../../../Services/viewemployee.service';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css'],
  providers: [DatePipe]
})
export class EmpRegistrationComponent implements OnInit {

  empObj: EmployeeModel = new EmployeeModel()
  @Input() view: boolean;
  employeeList = [];
  filterList = [];
  empId: number = 0;
  dateofbirth: string;
  formname: string = 'Employee Registration';
  savebtn: string = 'Submit';



  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    dateofbirth: new FormControl(''),
    nic: new FormControl(''),
    gender: new FormControl(''),
    joindate: new FormControl(''),
    mobilenumber: new FormControl(''),
    landphone: new FormControl('')
  });

  constructor(private empService: EmployeeService, private viewEmpService: ViewemployeeService, private route: ActivatedRoute,
    private datepipe: DatePipe, public toastr: ToastrService
  ) {
    this.empId = +this.route.snapshot.paramMap.get('id')


  }

  ngOnInit(): void {

    if (Number.isNaN(this.empId) == false)
      this.loadEmployees()

  }

  loadEmployees() {
    this.formname = 'Update Employee'
    this.savebtn = 'Update'

    this.viewEmpService.getemployeedetails().subscribe(data => {
      this.employeeList = data.result;

    }, err => {

    }, () => {

      this.employeeList.forEach(element => {
        if (element.id = this.empId) {
          this.profileForm.patchValue({
            firstName: element.firstName,
            lastName: element.lastName,
            address: element.address,
            nic: element.nic,
            gender: element.gender,
            joindate: element.joindate,
            mobilenumber: element.mobileNumber,
            landphone: element.landPhoneNumber
          });

          this.dateofbirth = this.datepipe.transform(element.dateofbirth, 'yyyy-MM-dd')
        }


      })
    })
  }

  SaveEmployee() {

    if (Number.isNaN(this.empId) == true) {
        this.empObj.firstName = this.profileForm.value.firstName,
        this.empObj.lastName = this.profileForm.value.lastName,
        this.empObj.address = this.profileForm.value.address,
        this.empObj.dateOfBirth = this.profileForm.value.dateofbirth,
        this.empObj.nic = this.profileForm.value.nic,
        this.empObj.genderId = Number(this.profileForm.value.gender),
        this.empObj.joinedDate = this.profileForm.value.joindate,
        this.empObj.mobileNumber = this.profileForm.value.mobilenumber,
        this.empObj.landPhoneNumber = this.profileForm.value.landphone


      this.empService.InsertEmployeeDetails(this.empObj).subscribe(data => {
        this.toastr.success("Successfully inserted..!")
        this.profileForm.reset()
      }, err => {
        this.toastr.success("Something went wrong..!")
      }, () => {

      })

    } else {
        this.empObj.firstName = this.profileForm.value.firstName,
        this.empObj.lastName = this.profileForm.value.lastName,
        this.empObj.address = this.profileForm.value.address,
        this.empObj.dateOfBirth = this.profileForm.value.dateofbirth,
        this.empObj.nic = this.profileForm.value.nic,
        this.empObj.genderId = Number(this.profileForm.value.gender),
        this.empObj.joinedDate = this.profileForm.value.joindate,
        this.empObj.mobileNumber = this.profileForm.value.mobilenumber,
        this.empObj.landPhoneNumber = this.profileForm.value.landphone

      this.empService.UpdateEmployeeDetails(this.empObj).subscribe(data => {
        this.toastr.success("Successfully updated..!")
        this.profileForm.reset()
      }, err => {
        this.toastr.success("Something went wrong..!")
      }, () => {

      })
    }
  }

  ResetPage(){
    this.profileForm.reset()
  }


}
