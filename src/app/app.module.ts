import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
  ],  //i remove landing page component from  it
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective
  ],
  providers: [
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
