import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MemberService}from '../../../Services/member.service';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.css']
})
export class MemberRegistrationComponent implements OnInit {

  sportList = [];
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    dateOfBirth: new FormControl(''),
    nic: new FormControl(''),
    genderId: new FormControl(''),
    joinedDate: new FormControl(''),
    mobilenumber: new FormControl(''),
    landphone: new FormControl(''),
    myValues: new FormControl(''),

    chest: new FormControl(''),
    leftArm: new FormControl(''),
    abdomen: new FormControl(''),
    leftThigh: new FormControl(''),
    leftCalf: new FormControl(''),
    waist: new FormControl(''),
    rightArm: new FormControl(''),
    hips: new FormControl(''),
    rightThigh: new FormControl(''),
    rightCalf: new FormControl(''),

    description: new FormControl(''),
    amount: new FormControl(''),
    status: new FormControl(''),
    registerDate: new FormControl('')

  });
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
  }

  SaveMember(formDate) {
    formDate.myValues =this.sportList;
    console.log("save data=====", formDate)
    this.memberService.insertMemberDetails(formDate).subscribe(Response=>{

    })

  }



  onCheckChange(event, id) {
    if (event && id == 1) {
      this.sportList.push(1);
    } else if (!event && id == 1) {
      const index = this.sportList.indexOf(1);
      if (index > -1) {
        this.sportList.splice(index, 1);
      }
    } else if (event && id == 2) {
      this.sportList.push(2);
    } else if (!event && id == 2) {
      const index = this.sportList.indexOf(2);
      if (index > -1) {
        this.sportList.splice(index, 1);
      }
    } else if (event && id == 3) {
      this.sportList.push(3);
    } else if (!event && id == 3) {
      const index = this.sportList.indexOf(3);
      if (index > -1) {
        this.sportList.splice(index, 1);
      }
    }
    console.log("event data=====", this.sportList);

  }



}
