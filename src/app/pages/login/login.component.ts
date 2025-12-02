import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../core/services/models/Employee.model';
import { EmployeeService } from '../../core/services/employee.service';
import { RegisterComponent } from "../register/register.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RegisterComponent, RouterLink,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginObj: LoginModel = new LoginModel();

onLogin(){
  if(this.loginObj.emailId == "ramu@123" && this.loginObj.password == "0000" ){
this.router.navigateByUrl('/dashboard');
// localStorage.setItem("user","ramu@123")
  }else{
    alert("Wrong Credential")
  }
}


  // employeeService = inject(EmployeeService);

  // enterApp() {
  //   this.employeeService.onLogin(this.loginObj).subscribe({
  //     next: (result: any) => {
  //       if (result.result) {
  //         alert('Login Succes');
  //         localStorage.setItem('leaveUser', JSON.stringify(result.data));
  //         this.router.navigateByUrl('/dashboard');
  //       } else {
  //         alert(result.massage);
  //       }
  //     },
  //     error: () => {
  //       alert('api flase');
  //     },
  //   });
  // }
  byPassLog() {
    this.router.navigateByUrl('/dashboard');
  }
}
