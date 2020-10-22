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

  insertMemberDetails(member){
    console.log("BBBBBBB",member)
    return this.http.post<any>(`${this.global.base_url}`+'member/',member);
  }
}