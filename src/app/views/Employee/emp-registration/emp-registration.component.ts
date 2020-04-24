import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeModel } from '../../../Models/employee-model';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {

  empObj: EmployeeModel = new EmployeeModel()



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

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
  }

  SaveEmployee() {
    this.empObj.firstName = this.profileForm.value.firstName,
    this.empObj.lastName = this.profileForm.value.lastName,
    this.empObj.address = this.profileForm.value.address,
    this.empObj.dateOfBirth = this.profileForm.value.dateofbirth,
    this.empObj.nic = this.profileForm.value.nic,
    this.empObj.genderId = Number(this.profileForm.value.gender),
    this.empObj.joinedDate = this.profileForm.value.joindate,
    this.empObj.mobileNumber = this.profileForm.value.mobilenumber,
    this.empObj.landPhoneNumber = this.profileForm.value.landphone 

    this.empService.InsertEmployeeDetails(this.empObj).subscribe(data=>{

    },err=>{

    },()=>{
      
    })
    
  }

}
