import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GlobalService } from './global.service';
import { EmployeeModel } from '../Models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // getEmployeeDetails(empObj: EmployeeModel) {
  //   throw new Error("Method not implemented.");
  // }


  constructor(private http:HttpClient, private global:GlobalService) { }

  InsertEmployeeDetails(employee){
    console.log("BBBBBBB",employee)
    return this.http.post<EmployeeModel>(`${this.global.base_url}`+'employee/insert',employee)
  }
}
