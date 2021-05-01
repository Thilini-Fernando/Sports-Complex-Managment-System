import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LognUser } from '../../Models/member-model';
import { MemberService } from '../../Services/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginUser:LognUser = new LognUser();

  constructor(public router: Router,private memberService: MemberService,) { 
    
  }

  ngOnInit(): void { 
  }

  Login(){
    console.log("uuuuuuuuuuuuuuuuu",this.loginUser)
    this.memberService.loginUser(this.loginUser).subscribe(data=>{
console.log("llllll", data)
    })
    this.router.navigate(["/dashboard"])
  }

}
 