import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  text: string = 'Welcome To Expense Tracker!..';
  letters: string[] = [];

  ngOnInit(): void {
    this.letters = this.text.split('');

}
}
