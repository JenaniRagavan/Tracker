import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';


@NgModule({
  declarations: [  ],  // i remove all component from it 1.login 2.profile 3.todotranscation 4.landingpage 5. dashboard 6. expense 7.sidenav 8. income 9.history
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
