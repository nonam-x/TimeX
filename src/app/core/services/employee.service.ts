import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponseModel } from './models/Employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  onLogin(obj:any){
return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login",obj)

  }
  getEmployee() :Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees");
  }

  getDepart():any{
return this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments").pipe(
  map((res: any)=> res.data))

  }
  
  onSaveNewEmployee(obj:any){
return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee",obj)

  }
}
