import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberRegistrationComponent} from '../member/member-registration/member-registration.component';
import {ViewMemberComponent} from '../member/view-member/view-member.component';

const routes: Routes = [
  {
    path: '',
    children:[{
      path:'registration',
      component:MemberRegistrationComponent
    },
    {
      path:'viewmembers',
      component:ViewMemberComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
