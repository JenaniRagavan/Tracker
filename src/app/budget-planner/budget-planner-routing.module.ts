import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {path:'login',component:LoginComponent},
//   {path:'side-nav',component:SideNavComponent},
//   {path:'dashboard',component:DashboardComponent},
//   {path:'income',component:IncomeComponent},
//   {path:'expense',component:ExpenseComponent},
//   {path:'todo',component:TodoComponent},
//   {path:'history',component:HistoryComponent},
//   {path:'profile',component:ProfileComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
