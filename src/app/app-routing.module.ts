import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
{
  // eager loading 
  path:'',
  component:LandingPageComponent
},
{
  path: 'budget-planner',
  loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
