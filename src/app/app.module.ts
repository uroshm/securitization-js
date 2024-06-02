import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CollateralSummaryComponent } from './component/collateral-summary/collateral-summary.component'
import { CollateralDetailComponent } from './component/collateral-detail/collateral-detail.component'

@NgModule({
    declarations: [
        AppComponent,
        CollateralSummaryComponent,
        CollateralDetailComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
