
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

router = inject(Router)

logOff(){
  localStorage.removeItem("leaveUser")
  this.router.navigateByUrl('login')
}



}
