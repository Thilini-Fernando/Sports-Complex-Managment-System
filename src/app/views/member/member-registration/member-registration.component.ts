import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import { ToastrService } from 'ngx-toastr';
import { MemberModel, Mesurements, RegistrationFees, SportId } from '../../../Models/member-model';
import { MemberService } from '../../../Services/member.service';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.css'],
  providers: [DatePipe]
})
export class MemberRegistrationComponent implements OnInit {

  isSecondTab: boolean = false
  sportList:Array<SportId> = [];
  memberModel = new MemberModel();
  measurementModel = new Mesurements();
  regFeeModel = new RegistrationFees();
  sportId: number;
  memberId: number;
  formname: string;
  savebtn: string;
  dateOfBirth: string;
  joinedDate: string;
  disableFeeTab: boolean = false
  NextBtn: string = "Next"
  @ViewChild('tabset') public myTabset: NgbNav;
  profileForm: FormGroup


  constructor(private memberService: MemberService, private route: ActivatedRoute, 
    private datepipe: DatePipe, public toastr: ToastrService) {
    this.memberId = +this.route.snapshot.paramMap.get('id')
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      nic: new FormControl('', [Validators.required]),
      genderId: new FormControl('', [Validators.required]),
      joinedDate: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      landPhoneNumber: new FormControl('', [Validators.required]),
      sportsId: new FormControl('', [Validators.required]),

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

      description: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      registerDate: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit(): void {
    if (Number.isNaN(this.memberId) == false) {
      this.loadMember()
      this.NextBtn = 'Update'
      this.disableFeeTab = true;
    }



  }

  memberList: MemberModel[]
  memberListNew: any
  isTrueMale: boolean = false
  isTrueFemale: boolean = false
  loadMember() {
    this.formname = 'Update Employee'
    this.savebtn = 'Update'

    this.memberService.getMemberWiseDetails(this.memberId).subscribe(data => {

      this.memberListNew = data.result;
      if (data.result.genderId == 1)
        this.isTrueMale = true
      else {
        this.isTrueFemale = true
      }

    }, err => {

    }, () => {


      console.log("dttttt",
        console.log("dttttt", this.memberListNew))
      this.profileForm.patchValue({
        firstName: this.memberListNew.firstName,
        lastName: this.memberListNew.lastName,
        address: this.memberListNew.address,
        nic: this.memberListNew.nic,
        dateofbirth: this.memberListNew.dateOfBirth,
        joinedDate: this.memberListNew.joindate,
        designation: this.memberListNew.designation,
        mobileNumber: this.memberListNew.mobileNumber,
        landPhoneNumber: this.memberListNew.landPhoneNumber,
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

      this.dateOfBirth = this.datepipe.transform(this.memberListNew.dateOfBirth, 'yyyy-MM-dd')
      this.joinedDate = this.datepipe.transform(this.memberListNew.joinedDate, 'yyyy-MM-dd')
    })
  }

  SaveMember(formDate) {
    console.log("KKKKKKKKKKKKKKKKKKK",this.sportList)
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
    this.memberModel.genderId = +formDate.genderId;
    this.memberModel.joinedDate = formDate.joinedDate;
    this.memberModel.landPhoneNumber = formDate.landPhoneNumber;
    this.memberModel.mobileNumber = formDate.mobileNumber;
    this.memberModel.registrationFee = formDate.registrationFee;
    this.memberModel.nic = formDate.nic;
    this.memberModel.sportsIdList = this.sportList
    // this.memberModel.sportId = this.sportId;

    this.memberModel.measurement = [];
    this.memberModel.registrationFee = [];
    this.memberModel.measurement.push(this.measurementModel);
    this.memberModel.registrationFee.push(this.regFeeModel);

    if (this.profileForm.invalid ) {
      console.log("kkkkkkkk",this.myTabset.activeId)
      this.toastr.warning("Please fill all details..")
    } else{
      this.memberService.insertMemberDetails(this.memberModel).subscribe(Response => {

      }, err => {
  
      }, () => {
        this.toastr.success("Successfully inserted..!")
        this.profileForm.reset();
      })
    }
  

  }



  onCheckChange(event, id) {
    if (event && id == 1) {
      this.sportList.push({sportsId:1});
      this.sportId = 1;
    } else if (!event && id == 1) {
      const index = this.sportList.indexOf({sportsId:1});
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId = 1;
      }
    } else if (event && id == 2) {
      this.sportList.push({sportsId:2});
      this.sportId = 2;
    } else if (!event && id == 2) {
      const index = this.sportList.indexOf({sportsId:2});
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId = 1;
      }
    } else if (event && id == 3) {
      this.sportList.push({sportsId:3});
      this.sportId = 3;
    } else if (!event && id == 3) {
      const index = this.sportList.indexOf({sportsId:3});
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId = 1;
      }
    }
    console.log("event data=====", this.sportList);

  }

  Update(formDate) {
   
  
      if (Number.isNaN(this.memberId) == false) {

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
        this.memberModel.sportsIdList = this.sportList
        // this.memberModel.sportId = this.sportId;
  
        this.memberModel.measurement = [];
        this.memberModel.registrationFee = [];
        this.memberModel.measurement.push(this.measurementModel);
  
  console.log("bbbbbbbbbbbbbbbb",this.memberModel,this.sportList)
        this.memberService.updateMemberDetails(this.memberModel).subscribe(data => {
  
        }, err => {
  
        }, () => {
          this.toastr.success("Successfully updated..!")
        })
  
      } else {
        this.profileForm.patchValue({
          registerDate: null,
          description: null,
          amount: null})
          this.myTabset.select('tab3');
        
      }
 
  
  }


  firstNext(mesurements) {
    if (Number.isNaN(this.memberId) == true) {
      this.profileForm.patchValue({
        registerDate: 'register date',
        description: 'description',
        amount: 'amount'})
      if (this.profileForm.invalid ) {
      
        this.toastr.warning("Please fill all details..")
      } else {
        this.isSecondTab = true;
        this.myTabset.select('tab2');
        
      }
    }else{
      this.myTabset.select('tab2');
    }
   
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
