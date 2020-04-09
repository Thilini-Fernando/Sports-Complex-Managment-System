import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public base_url:string

  constructor(private http:HttpClient) {
    this.base_url = 'localhost:4200/'
   }

 
}
