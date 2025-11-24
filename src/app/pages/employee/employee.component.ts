import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import {
  APIResponseModel,
  employeeData,
  EmployeeModell,
} from '../../core/services/models/Employee.model';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employee',
  imports: [ FormsModule, AsyncPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  // yaha service ko inject kiya
  employeeService = inject(EmployeeService);
// object create kiya aur type ke liye model.ts se model use kiya
  emloyeeList: employeeData[] = [];

  ngOnInit() {
    this.getEmployee();
    this.deptList$ = this.employeeService.getDepart();
  }

// api se a rhe employe data ko show karne ke liye function
  getEmployee() {
    this.employeeService.getEmployee().subscribe({
      next: (response: APIResponseModel) => {
        this.emloyeeList = response.data;
      },
      error: () => {},
    });
  }

  @ViewChild('newModel') newModel!: ElementRef;
 

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

  deptList$: Observable<any[]> = new Observable<any[]>();

  employeeObj: EmployeeModell = new EmployeeModell();


  onSaveEmployee() {
    debugger;
    this.employeeService.onSaveNewEmployee(this.employeeObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.getEmployee();
          alert('employee created');
        } else {
          alert(res.massage);
        }
      },
      error: () => {
        alert('api error');
      },
    });
  }
}
