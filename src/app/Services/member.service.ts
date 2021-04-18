import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GlobalService } from './global.service';
import { EmployeeModel } from '../Models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // getEmployeeDetails(empObj: EmployeeModel) {
  //   throw new Error("Method not implemented.");
  // }


  constructor(private http:HttpClient, private global:GlobalService) { }

  insertMemberDetails(memberVO){
    console.log("BBBBBBB",memberVO)
    return this.http.post<any>(`${this.global.base_url}`+'member/',memberVO);
  }

  getMemberDetails(){
    return this.http.get<any>(`${this.global.base_url}`+'member/');
  }

  getMemberWiseDetails(memberId){
    return this.http.get<any>(`${this.global.base_url}`+`member/${memberId}`);
  }
}