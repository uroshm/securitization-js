import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollateralSummaryComponent } from "./component/collateral-summary/collateral-summary.component";
import { CollateralDetailComponent } from "./component/collateral-detail/collateral-detail.component";
import { HomeComponent } from "./component/home/home.component";
import { BondSummaryComponent } from "./component/bond-summary/bond-summary.component";
import { ScenarioSummaryComponent } from "./component/scenario-summary/scenario-summary.component";

const routes: Routes = [
  { path: "app-home", component: HomeComponent },
  { path: "app-collateral-summary", component: CollateralSummaryComponent },
  { path: "app-collateral-detail", component: CollateralDetailComponent },
  { path: "app-bond-summary", component: BondSummaryComponent },
  { path: "app-scenario-summary", component: ScenarioSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
