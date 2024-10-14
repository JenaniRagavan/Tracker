import { Component } from '@angular/core';
import { MatIconAnchor } from '@angular/material/button';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidenav-bar',
  standalone:true,
  imports:[MatIconAnchor],
  templateUrl: './sidenav-bar.component.html',
  styleUrl: './sidenav-bar.component.css'
})
export class SidenavBarComponent {

  isSlideOut = true;
  constructor(private router: Router){}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }
  onDash(){
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onProfile(){
    this.router.navigate(['/budget-planner/profile']);
  }
  onHistory(){
    this.router.navigate(['/budget-planner/history']);
  }
  onLogout(){
    this.router.navigate(['/budget-planner/login']);
  }
}

