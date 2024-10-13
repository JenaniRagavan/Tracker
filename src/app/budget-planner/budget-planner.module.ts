import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { TodoTranscationsComponent } from './todo-transcations/todo-transcations.component';




@NgModule({
  declarations: [
  
    TodoTranscationsComponent
  ],  // i remove login component from it 1.login 2.profile
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
