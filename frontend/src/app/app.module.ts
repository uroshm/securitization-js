import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CollateralSummaryComponent } from './component/collateral-summary/collateral-summary.component'
import { CollateralDetailComponent } from './component/collateral-detail/collateral-detail.component';
import { HomeComponent } from './component/home/home.component';
import { BondSummaryComponent } from './component/bond-summary/bond-summary.component';
import { BondDetailComponent } from './component/bond-detail/bond-detail.component';
import { ScenarioSummaryComponent } from './component/scenario-summary/scenario-summary.component';
import { ScenarioDetailComponent } from './component/scenario-detail/scenario-detail.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router'
@NgModule({
    declarations: [
        AppComponent,
        CollateralDetailComponent,
        HomeComponent,
        BondSummaryComponent,
        BondDetailComponent,
        ScenarioSummaryComponent,
        ScenarioDetailComponent,
    ],
    imports: [BrowserModule, MatFormFieldModule, RouterModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
