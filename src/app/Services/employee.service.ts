import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
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
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With');
    return this.http.get<number>(`${this.global.base_url}`+'employeeDelete?Id=${Id}')
  }

}
