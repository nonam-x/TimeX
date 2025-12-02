
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterOutlet,NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  router = inject(Router)
  isCollapsed = true;

logOff(){
  localStorage.removeItem("leaveUser")
  this.router.navigateByUrl('login')
}





}
