export class LoginModel {
  emailId: string;
  password: string;

  constructor() {
    this.emailId = '';
    this.password = '';
  }
}

export interface APIResponseModel{
  message: string,
  result: boolean,
  data: any
}

export class EmployeeModell{
  employeeId: number
  employeeName: string
  contactNo: string
  emailId: string
  deptId: number
  password: string
  gender: string
  role: string

constructor(){
{
  this.employeeId= 0;
  this.employeeName= "";
  this.contactNo= "";
  this.emailId= "";
  this.deptId= 0;
  this.password= "";
  this.gender= "";
  this.role= ""
}
}
}





export interface employeeData{
   
      "employeeId": Number,
      "employeeName": string,
      "deptId": number,
      "deptName": number,
      "contactNo": number,
      "emailId": string,
      "role": string,
    
}