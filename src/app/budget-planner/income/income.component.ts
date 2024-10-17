import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChartModule } from 'angular-highcharts';


@Component({
  selector: 'app-income',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,ChartModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {
  incomeForm: any;
  selectedMonth: any;
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5000, investments: '' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  AprilIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  MayIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  JuneIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  JulyIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  AugustIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  SeptemberIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  OctoberIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  NovemberIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  DecemberIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: 'Essential' },
    { source: 'Salary', amount: 5200, investments: '' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  monthSelected:boolean=false;
  constructor(public fb: FormBuilder,public router:Router) { 
    this.selectedMonth = 'January'; // default value
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }

  // Chart data
  public lineChartData: any[] = [
    { data: [], label: 'Income' }
  ];
  public lineChartLabels: string[] = [];
  public lineChartOptions: any = {
    responsive: true
  };
  
  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    });
  }


  onChange(event: any) {
    this.selectedMonth = event.target.value
    this.monthSelected=true;
    this.getFilteredIncomes();
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
          return this.marchIncomes;
      case 'April':
         return this.AprilIncomes
      case 'May':
         return this.MayIncomes
      case 'June':
          return this.JuneIncomes
      case 'July':
           return this.JulyIncomes
      case 'August':
         return this.AugustIncomes
      case 'September':
         return this.SeptemberIncomes
      case 'october':
         return this.OctoberIncomes
      case 'November':
         return this.NovemberIncomes
      case 'December':
          return this.DecemberIncomes
      default:
        return [];
    }
  }

  getFilteredIncomes() {
    let filteredIncomes: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredIncomes = [...this.januaryIncomes];
        break;
      case 'February':
        filteredIncomes = [...this.februaryIncomes];
        break;
      case 'March':
        filteredIncomes = [...this.marchIncomes];
        break;
      case 'April':
        filteredIncomes = [...this.AprilIncomes];
        break;
      case 'May':
        filteredIncomes = [...this.MayIncomes];
        break;
      case 'June':
        filteredIncomes = [...this.JuneIncomes];
        break;
      case 'July':
        filteredIncomes = [...this.JulyIncomes];
        break;
      case 'August':
        filteredIncomes = [...this.AugustIncomes];
        break;
      case 'september':
        filteredIncomes = [...this.SeptemberIncomes];
        break;
      case 'october':
        filteredIncomes = [...this.OctoberIncomes];
        break;
      case 'November':
        filteredIncomes = [...this.NovemberIncomes];
        break;
      case 'December':
        filteredIncomes = [...this.DecemberIncomes];
        break;
      default:
        break;
    }
    return filteredIncomes;
  }
  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncomes.push(newIncome);
          break;
        case 'February':
          this.februaryIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        case 'April':
          this.AprilIncomes.push(newIncome);
          break;
        case 'May':
          this.MayIncomes.push(newIncome);
          break;
        case 'June':
          this.JuneIncomes.push(newIncome);
          break;
        case 'July':
          this.JulyIncomes.push(newIncome);
          break;
        case 'August':
          this.AugustIncomes.push(newIncome);
          break;
        case 'September':
          this.SeptemberIncomes.push(newIncome);
          break;
        case 'October':
          this.OctoberIncomes.push(newIncome);
          break;
        case 'November':
          this.NovemberIncomes.push(newIncome);
          break;
        case 'December':
          this.DecemberIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' });
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  //charts

  public lineChart: any; 
  
}