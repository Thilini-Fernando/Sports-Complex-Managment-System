import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GlobalService } from './global.service';
import { EmployeeModel } from '../Models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient, private global:GlobalService) { }

  InsertEmployeeDetails(employee){
    return this.http.post<EmployeeModel>(`${this.global.base_url}`+'employee/',employee)
  }

  UpdateEmployeeDetails(employee){
    return this.http.post<EmployeeModel>(`${this.global.base_url}`+'employee/employeeUpdate/',employee)
  }

  DeleteEmployeeDetails(id){
    return this.http.get<number>(`${this.global.base_url}`+'employeeDelete?Id=${Id}')
  }

  Test() {
    return this.http.post<String>('http://localhost:8081/test/new', null)
  }

}
