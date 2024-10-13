import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],  // i remove login component from it 
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
