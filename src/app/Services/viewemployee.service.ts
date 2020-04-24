import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { ViewemployeeModel } from '../Models/viewemployee-model';

@Injectable({
  providedIn: 'root'
})
export class ViewemployeeService {

  constructor(private http:HttpClient, private global:GlobalService) { }

  getemployeedetails(){
    return this.http.get<any>(`${`${this.global.base_url}`}employee/`)
  }
}
