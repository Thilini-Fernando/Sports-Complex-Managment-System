import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MemberModel, Mesurements, RegistrationFees } from '../../../Models/member-model';
import { MemberService}from '../../../Services/member.service';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.css'],
  providers: [DatePipe]
})
export class MemberRegistrationComponent implements OnInit {

  sportList = [];
  memberModel =  new MemberModel();
  measurementModel = new Mesurements();
  regFeeModel = new RegistrationFees();
  sportId:number;
  memberId:number;
  formname:string;
  savebtn:string;
  dateOfBirth:string;
  joinedDate:string;
  disableFeeTab:boolean = false
  NextBtn:string = "Next"

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
    registerDate: new FormControl('')

  });
  constructor(private memberService: MemberService, private route: ActivatedRoute, private datepipe: DatePipe, public toastr: ToastrService) {
    this.memberId = +this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    if (Number.isNaN(this.memberId) == false){
      this.loadMember()
      this.NextBtn = 'Update'
      this.disableFeeTab = true;
    }
 


  }

  memberList:MemberModel[]
  memberListNew:any
  isTrueMale:boolean = false
  isTrueFemale:boolean = false
  loadMember(){
    this.formname = 'Update Employee'
    this.savebtn = 'Update'

    this.memberService.getMemberWiseDetails(this.memberId).subscribe(data => {
      
      this.memberListNew = data.result;
      if(data.result.genderId == 1)
      this.isTrueMale = true
      else{
        this.isTrueFemale = true
      }

    }, err => {

    }, () => {


      console.log("dttttt",
      console.log("dttttt",  this.memberListNew))
      this.profileForm.patchValue({
        firstName:  this.memberListNew.firstName,
        lastName:  this.memberListNew.lastName,
        address:  this.memberListNew.address,
        nic:  this.memberListNew.nic,
        dateofbirth: this.memberListNew.dateOfBirth,
        joinedDate:  this.memberListNew.joindate,
        designation: this.memberListNew.designation,
        mobileNumber:  this.memberListNew.mobileNumber,
        landPhoneNumber:  this.memberListNew.landPhoneNumber,
        sportsId: this.memberListNew.sportsId,
        chest: this.memberListNew.measurement[0].chest,
        leftArm: this.memberListNew.measurement[0].left_arm,
        abdomen: this.memberListNew.measurement[0].abdomen,
        leftThigh: this.memberListNew.measurement[0].left_thigh,
        leftCalf: this.memberListNew.measurement[0].left_calf,
        waist: this.memberListNew.measurement[0].wrist,
        rightArm: this.memberListNew.measurement[0].right_arm,
        hips: this.memberListNew.measurement[0].hips,
        rightThigh: this.memberListNew.measurement[0].right_thigh,
        rightCalf: this.memberListNew.measurement[0].right_calf
      });

      this.dateOfBirth = this.datepipe.transform( this.memberListNew.dateOfBirth, 'yyyy-MM-dd')
      this.joinedDate = this.datepipe.transform( this.memberListNew.joinedDate, 'yyyy-MM-dd')
    })
  }

  SaveMember(formDate) {
    this.measurementModel.chest = formDate.chest
    this.measurementModel.abdomen = formDate.abdomen
    this.measurementModel.hips = formDate.hips
    this.measurementModel.left_arm = formDate.leftArm
    this.measurementModel.left_calf = formDate.leftCalf
    this.measurementModel.left_thigh = formDate.leftThigh
    this.measurementModel.right_arm = formDate.rightArm
    this.measurementModel.right_calf = formDate.rightCalf
    this.measurementModel.right_thigh = formDate.rightThigh
    this.measurementModel.wrist = formDate.waist

    this.regFeeModel.amount = Number(formDate.amount);
    this.regFeeModel.date = formDate.registerDate;
    this.regFeeModel.description = formDate.description;
  

    // formDate.sportsId =this.sportList;
    this.memberModel.address = formDate.address;
    this.memberModel.dateOfBirth = formDate.dateOfBirth;
    this.memberModel.firstName = formDate.firstName;
    this.memberModel.lastName = formDate.lastName;
    this.memberModel.genderId = formDate.genderId;
    this.memberModel.joinedDate = formDate.joinedDate;
    this.memberModel.landPhoneNumber = formDate.landPhoneNumber;
    this.memberModel.mobileNumber = formDate.mobileNumber;
    this.memberModel.registrationFee = formDate.registrationFee;
    this.memberModel.nic = formDate.nic;
    //this.memberModel.sportsId = this.sportList
    this.memberModel.sportId =this.sportId;
    
    this.memberModel.measurement = [];
    this.memberModel.registrationFee = [];
    this.memberModel.measurement.push(this.measurementModel);
    this.memberModel.registrationFee.push(this.regFeeModel);

    console.log("SAVEDATA", this.memberModel)
    this.memberService.insertMemberDetails(this.memberModel).subscribe(Response=>{

    },err=>{

    },()=>{
      this.toastr.success("Successfully inserted..!")
      this.profileForm.reset();
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

  Update(formDate){
    if (Number.isNaN(this.memberId) == false){
      
    this.measurementModel.chest = formDate.chest
    this.measurementModel.abdomen = formDate.abdomen
    this.measurementModel.hips = formDate.hips
    this.measurementModel.left_arm = formDate.leftArm
    this.measurementModel.left_calf = formDate.leftCalf
    this.measurementModel.left_thigh = formDate.leftThigh
    this.measurementModel.right_arm = formDate.rightArm
    this.measurementModel.right_calf = formDate.rightCalf
    this.measurementModel.right_thigh = formDate.rightThigh
    this.measurementModel.wrist = formDate.waist


    // formDate.sportsId =this.sportList;
    this.memberModel.memberId = this.memberId
    this.memberModel.address = formDate.address;
    this.memberModel.dateOfBirth = formDate.dateOfBirth;
    this.memberModel.firstName = formDate.firstName;
    this.memberModel.lastName = formDate.lastName;
    this.memberModel.genderId = formDate.genderId;
    this.memberModel.joinedDate = formDate.joinedDate;
    this.memberModel.landPhoneNumber = formDate.landPhoneNumber;
    this.memberModel.mobileNumber = formDate.mobileNumber;
    this.memberModel.registrationFee = formDate.registrationFee;
    this.memberModel.nic = formDate.nic;
    //this.memberModel.sportsId = this.sportList
    this.memberModel.sportId =this.sportId;
    
    this.memberModel.measurement = [];
    this.memberModel.registrationFee = [];
    this.memberModel.measurement.push(this.measurementModel);


  this.memberService.updateMemberDetails(this.memberModel).subscribe(data=>{

  },err=>{

  },()=>{
    this.toastr.success("Successfully updated..!")
  })

  }
}
}
