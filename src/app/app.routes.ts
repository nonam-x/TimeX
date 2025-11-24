import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'leave',
        component: LeaveComponent,
      },
    ],
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];
