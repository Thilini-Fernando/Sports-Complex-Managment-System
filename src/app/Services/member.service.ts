import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
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

  updateMemberDetails(memberVO){
    console.log("BBBBBBB",memberVO)
    return this.http.put<any>(`${this.global.base_url}`+'member/',memberVO);
  }

  getMemberDetails(){
    return this.http.get<any>(`${this.global.base_url}`+'member/');
  }

  getMemberWiseDetails(memberId){
    return this.http.get<any>(`${this.global.base_url}`+`member/${memberId}`);
  }

 deleteMember(memberId){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Headers', 'X-Requested-With');
  
    return this.http.delete<any>(`${this.global.base_url}`+`member/${memberId}`);
  }
}