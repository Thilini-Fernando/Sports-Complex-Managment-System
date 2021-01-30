import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  empId:number = 0;
  dateofbirth:string;
  formname:string = 'Employee Registration';
  savebtn:string = 'Submit';



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

  constructor(private empService:EmployeeService,private viewEmpService: ViewemployeeService,private route: ActivatedRoute,
    private datepipe:DatePipe
   ) {
    this.empId = +this.route.snapshot.paramMap.get('id')
      
    

    // if( this.empId != 0 ||this.empId != undefined ){
    //   this.formname = 'Update Employee'
    //   this.savebtn = 'Update'
    //  }else{
    //   this.formname = 'Employee Registration'
    //   this.savebtn = 'Submit'
    //  } 
    }

  ngOnInit(): void {

 
     if(Number.isNaN(this.empId) == false)
      this.loadEmployees()
    
      
 
  }

  loadEmployees() {
   console.log("fff", this.empId)
     this.formname = 'Update Employee'
      this.savebtn = 'Update'

    this.viewEmpService.getemployeedetails().subscribe(data => {
      this.employeeList = data.result;
     
    }, err => {

    }, () => {
      
       this.employeeList .forEach(element => {
         if(element.id = this.empId){
             // this.empObj.id = element.id
      // this.empObj.firstName = element.firstName,
      // this.empObj.lastName = element.lastName,
      // this.empObj.address = element.address,
      // this.empObj.dateOfBirth = element.dateofbirth,
      // this.empObj.nic = element.nic,
      // this.empObj.genderId = element.gender,
      // this.empObj.joinedDate = element.joindate,
      // this.empObj.mobileNumber = element.mobilenumber,
      // this.empObj.landPhoneNumber = element.landphone 
      this.profileForm.patchValue({
        firstName: element.firstName,
        lastName: element.lastName,
        address: element.address,
        // dateofbirth: this.datepipe.transform(element.dateofbirth, 'yyyy-MM-dd'),
        nic: element.nic,
        gender:element.gender,
        joindate:element.joindate,
        mobilenumber:element.mobileNumber,
        landphone:element.landPhoneNumber
          }); 

          this.dateofbirth = this.datepipe.transform(element.dateofbirth, 'yyyy-MM-dd')
         }
        
         
  })
})
  }

  SaveEmployee() {
    if(this.empId == 0){
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
      
    }else{
      
      this.empService.UpdateEmployeeDetails(this.empObj).subscribe(data=>{
        console.log("updataaaaaaaa",this.empObj)
      },err=>{
  
      },()=>{
        
      })
    }
    }
   

}
