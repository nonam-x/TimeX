export class AllLeaveModel {
  details: string;
  employeeId: number;
  employeeName: string;
  fromDate: string;
  leaveId: number;
  leaveType: string;
  noOfDays: number;
  toDate: string;
  approvedDate: string;
  isApproved: boolean;

  constructor() {
    this.details = '';
    this.employeeId = 0;
    this.employeeName = '';
    this.fromDate = '';
    this.leaveId = 0;
    this.leaveType = '';
    this.noOfDays = 0;
    this.toDate = '';
    this.approvedDate = '';
    this.isApproved = true;
  }
}

// export interface leaveData {
//   employeeName: string;
//   fromDate: string;
//   leaveId: number;
//   leaveType: string;
//   noOfDays: number;
//   toDate: string;
//   approvedDate: string;
//   isApproved: boolean;
// }
 export interface leaveData{
      "details": string;
      "employeeId": number
      "employeeName": string;
      "fromDate": string;
      "leaveId": number,
      "leaveType":string;
      "noOfDays": number,
      "toDate": string;
      "approvedDate": string;
      "isApproved": false
    }
