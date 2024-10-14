import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { IncomeComponent } from './income/income.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [  ],  // i remove all component from it 1.login 2.profile 3.todotranscation 4.landingpage 5. dashboard 6. expense 7.sidenav 8. income 9.history
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
