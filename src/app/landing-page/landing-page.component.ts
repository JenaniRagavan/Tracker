import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone:true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  text: string = 'Welcome To Expense Tracker!..';
  letters: string[] = [];


}
