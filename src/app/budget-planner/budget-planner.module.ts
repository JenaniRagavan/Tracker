import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
<<<<<<< HEAD
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [ 
    SideNavComponent
  ],  // i remove login component from it 1.login 2.profile 3.todotranscation
=======
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [],  // i remove all component from it 1.login 2.profile 3.todotranscation 4.landingpage 5. dashboard 6. expense 7.sidenav 8. income 9.history
>>>>>>> 7fe6be84fd2f29d97039e31f887726d246263143
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
