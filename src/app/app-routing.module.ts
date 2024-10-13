import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './budget-planner/profile/profile.component';

const routes: Routes = [
  {
    // lazy loading 
    path: 'budget-planner',
    loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule)
  },
  // {
  //   path:'',
  //   component:ProfileComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
