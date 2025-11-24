import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }


  getAllLeave(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllLeaves")
  }
  addLeave(obj:any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllLeaves",obj)
  }


}
