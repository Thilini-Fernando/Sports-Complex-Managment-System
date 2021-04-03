import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MemberModel, Mesurements, RegistrationFees } from '../../../Models/member-model';
import { MemberService}from '../../../Services/member.service';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.css']
})
export class MemberRegistrationComponent implements OnInit {

  sportList = [];
  memberModel =  new MemberModel();
  measurementModel = new Mesurements();
  regFeeModel = new RegistrationFees();
  sportId:number;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    dateOfBirth: new FormControl(''),
    nic: new FormControl(''),
    genderId: new FormControl(''),
    joinedDate: new FormControl(''),
    mobileNumber: new FormControl(''),
    landPhoneNumber: new FormControl(''),
    sportsId: new FormControl(''),

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
    this.measurementModel.chest = formDate.chest
    this.measurementModel.abdomen = formDate.abdomen
    this.measurementModel.hips = formDate.hips
    this.measurementModel.left_arm = formDate.left_arm
    this.measurementModel.left_calf = formDate.left_calf
    this.measurementModel.left_thigh = formDate.left_thigh
    this.measurementModel.right_arm = formDate.right_arm
    this.measurementModel.right_calf = formDate.right_calf
    this.measurementModel.right_thigh = formDate.right_thigh
    this.measurementModel.wrist = formDate.wrist

    this.regFeeModel.amount = formDate.amount
    this.regFeeModel.date = formDate.date
    this.regFeeModel.description = formDate.description
    this.regFeeModel.status = formDate.status

    // formDate.sportsId =this.sportList;
    this.memberModel.address = formDate.address
    this.memberModel.dateOfBirth = formDate.dateOfBirth
    this.memberModel.firstName = formDate.firstName
    this.memberModel.lastName = formDate.lastName
    this.memberModel.genderId = formDate.genderId
    this.memberModel.joinedDate = formDate.joinedDate
    this.memberModel.landPhoneNumber = formDate.landPhoneNumber
    this.memberModel.mobileNumber = formDate.mobileNumber
    this.memberModel.registrationFee = formDate.registrationFee
    this.memberModel.nic = formDate.nic
    //this.memberModel.sportsId = this.sportList
    this.memberModel.sportId =this.sportId;
    
    this.memberModel.measurement = []
    this.memberModel.registrationFee = []
    this.memberModel.measurement.push(this.measurementModel)
    this.memberModel.registrationFee.push(this.regFeeModel)

    console.log("SAVEDATA", this.memberModel)
    this.memberService.insertMemberDetails(this.memberModel).subscribe(Response=>{

    })

  }



  onCheckChange(event, id) {
    if (event && id == 1) {
      this.sportList.push(1);
      this.sportId =1;
    } else if (!event && id == 1) {
      const index = this.sportList.indexOf(1);
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId =1;
      }
    } else if (event && id == 2) {
      this.sportList.push(2);
      this.sportId =2;
    } else if (!event && id == 2) {
      const index = this.sportList.indexOf(2);
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId =1;
      }
    } else if (event && id == 3) {
      this.sportList.push(3);
      this.sportId =3;
    } else if (!event && id == 3) {
      const index = this.sportList.indexOf(3);
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId =1;
      }
    }
    console.log("event data=====", this.sportList);

  }



}
