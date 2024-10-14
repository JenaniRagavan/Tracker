import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [ 
    SideNavComponent
  ],  // i remove login component from it 1.login 2.profile 3.todotranscation
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
