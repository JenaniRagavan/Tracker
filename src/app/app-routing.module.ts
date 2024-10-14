import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './budget-planner/login/login.component';

const routes: Routes = [
  // eager loading 
  {
    path:'',
    component:LandingPageComponent
  },
  
  //lazy loading
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
