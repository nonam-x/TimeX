import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LeaveService } from '../../core/services/leave.service';
import { leaveData } from '../../core/services/models/Leave.model';
import { APIResponseModel } from '../../core/services/models/Employee.model';
import { DatePipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-leave',
  imports: [ReactiveFormsModule, DatePipe,NgIf],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css',
})
export class LeaveComponent {
  @ViewChild('newModel') newModel!: ElementRef;

  leaveService = inject(LeaveService);

  leaveData: leaveData[] = [];

  ngOnInit() {
    this.getAllLeave();
  }

  getAllLeave() {
    this.leaveService.getAllLeave().subscribe({
      next: (res: any) => {
        this.leaveData = res.data;
      },
      error:() => {
        alert("Api Error")
      },
    });
  }






  leaveForm: FormGroup = new FormGroup({
    leaveId: new FormControl(0),
    leaveType: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    noOfDays: new FormControl(''),
    details: new FormControl(''),
  });


addLeave(){
  debugger
  this.leaveService.addLeave(this.leaveForm).subscribe({
    next(res:any) {
      if(res.result){
        alert("leave request created")
      }
    },error() {
      alert("api problem")
    },
  })
}


  openNewModel() {
    if (this.newModel) {
      this.newModel.nativeElement.style.display = 'block';
    }
  }
  closeNewModel() {
    if (this.newModel) {
      this.newModel.nativeElement.style.display = 'none';
    }
  }
}
