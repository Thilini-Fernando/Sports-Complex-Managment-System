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
    this.empObj.FirstName = this.profileForm.value.firstName
    this.empObj.LastName = this.profileForm.value.lastName
    this.empObj.Address = this.profileForm.value.address
    this.empObj.DateOfBirth = this.profileForm.value.dateofbirth
    this.empObj.NIC = this.profileForm.value.nic
    this.empObj.Gender = this.profileForm.value.gender
    this.empObj.JoinedDate = this.profileForm.value.joindate
    this.empObj.MobileNumber = this.profileForm.value.mobilenumber
    this.empObj.LandPhoneNumber = this.profileForm.value.landphone 

    this.empService.InsertEmployeeDetails(this.empObj).subscribe(data=>{

    },err=>{

    },()=>{
      
    })
    
  }

}
