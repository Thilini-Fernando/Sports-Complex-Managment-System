import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.css']
})
export class MemberRegistrationComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    dateofbirth: new FormControl(''),
    nic: new FormControl(''),
    gender: new FormControl(''),
    joindate: new FormControl(''),
    mobilenumber: new FormControl(''),
    landphone: new FormControl(''),

    chest:new FormControl(''),
    leftArm:new FormControl(''),  
    abdomen:new FormControl(''),
    leftThigh:new FormControl(''),
    leftCalf:new FormControl(''),
    waist:new FormControl(''),
    rightArm:new FormControl(''),
    hips:new FormControl(''),
    rightThigh:new FormControl(''),
    rightCalf:new FormControl(''),

    description:new FormControl(''),
    amount:new FormControl(''),
    status:new FormControl(''),
    registerDate:new FormControl('')
    
  });
  constructor() { }

  ngOnInit(): void {
  }

}
