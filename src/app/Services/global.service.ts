import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public base_url:string

  constructor(private http:HttpClient) {
    // this.base_url = 'http://localhost:8080/wijaya_sports_complex_management_system/'
    this.base_url = 'http://localhost:8080/Wijaya_Sports_Complex_API/'
   }

 
}
