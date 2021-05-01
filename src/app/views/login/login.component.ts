import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LognUser } from '../../Models/member-model';
import { MemberService } from '../../Services/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginUser:LognUser = new LognUser();

  constructor(public router: Router,private memberService: MemberService, public toastr: ToastrService) { 
    
  }

  ngOnInit(): void { 
  }

  Login(){
    console.log("uuuuuuuuuuuuuuuuu",this.loginUser)
    this.memberService.loginUser(this.loginUser).subscribe(data=>{
      if(data.result.success == false){
        this.toastr.error("Invalid login details")
      }else{
        this.router.navigate(["/dashboard"])
      }
    })
  
  }

}
 