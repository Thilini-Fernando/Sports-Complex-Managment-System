import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberRegistrationComponent } from './member-registration/member-registration.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [MemberRegistrationComponent, ViewMemberComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule,
    ModalModule.forRoot()
  ]
})
export class MemberModule { }
