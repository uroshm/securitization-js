import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoanComponent } from './classes/loan/loan'
import { InterestRateComponent } from './classes/interest-rate/interest-rate'
import { FrequencyComponent } from './classes/frequency/frequency.component'

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
