import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { MemberModel } from '../../../Models/member-model';
import { MemberService } from '../../../Services/member.service';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {
  memberList: MemberModel[];
  closeResult = '';
  @ViewChild('viewModal') public vewModal: ModalDirective;

  constructor(public memberService: MemberService
    // , private modalService: NgbModal
    ) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.memberService.getMemberDetails().subscribe(data => {

      this.memberList = data.result
      this.memberList.forEach(element => {
        if (element.genderId == 1)
          element.gender = 'Male'
        else
          element.gender = 'Female'
      });
      console.log("memberdata", this.memberList)
    })
  }
  content:any
ViewMore(Id){
  this.memberService.getMemberWiseDetails(Id).subscribe(data=>{
    this.content = data
  })
 
  this.vewModal.show();

    // this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed`;
    // });
  }
}

