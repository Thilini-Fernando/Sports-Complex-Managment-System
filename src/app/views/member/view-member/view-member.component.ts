import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
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
  @ViewChild('deleteModal') public deleteModal: ModalDirective;

  constructor(public memberService: MemberService, private router: Router, public toastr: ToastrService
    // , private modalService: NgbModal
  ) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.memberService.getMemberDetails().subscribe(data => {
      this.memberList = []
      this.memberList = data.result.reverse();
      this.memberList.forEach(element => {
        if (element.genderId == 1)
          element.gender = 'Male'
        else
          element.gender = 'Female'
      });
      console.log("memberdata", this.memberList)
    })
  }
  content: any
  ViewMore(memberId) {

    this.memberService.getMemberWiseDetails(memberId).subscribe(data => {
      console.log("dataaaa", data)
      this.content = data.result.measurement
    })

    this.vewModal.show();

    // this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed`;
    // });
  }

  editUser(member) {
    console.log("nnnn", member)
    this.router.navigate(['/member/registration/' + member.memberId]);
  }

  memberId: number;
  deleteMember(meberId) {
    this.memberId = meberId
    this.deleteModal.show();

  }

  DeleteMemberOk() {

    this.deleteModal.show();
    this.memberService.deleteMember(this.memberId).subscribe(data => {
      this.toastr.success("Successfully deleted..")
      this.loadData();
    }, err => {
      this.toastr.error("Something went wrong..")
    }, () => {

    })
  }
}

