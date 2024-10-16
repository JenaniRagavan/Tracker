import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoTranscationsComponent } from './todo-transcations/todo-transcations.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
  ],  
    imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    LoginComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoTranscationsComponent,
    HistoryComponent,
    ProfileComponent,
    SideNavComponent,
    ChartModule
    //its all declared in"declaration part" but i mention in it in import part
  ]
})
export class BudgetPlannerModule { }
