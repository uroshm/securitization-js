import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanComponent } from './components/loan/loan.component';
import { InterestRateComponent } from './components/interest-rate/interest-rate.component';
import { FrequencyComponent } from './components/frequency/frequency.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    InterestRateComponent,
    FrequencyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
