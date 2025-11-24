import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

router= inject(Router)

logOff(){
  localStorage.removeItem("leaveUser")
  this.router.navigateByUrl('login')
}




}
