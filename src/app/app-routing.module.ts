import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './budget-planner/profile/profile.component';
import { LandingPageComponent } from './budget-planner/landing-page/landing-page.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  },
  {
    // lazy loading 
    path: 'budget-planner',
    loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
