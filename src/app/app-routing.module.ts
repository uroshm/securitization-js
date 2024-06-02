import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CollateralSummaryComponent } from './component/collateral-summary/collateral-summary.component'
import { CollateralDetailComponent } from './component/collateral-detail/collateral-detail.component'

const routes: Routes = [
    { path: 'app-collateral-summary', component: CollateralSummaryComponent },
    { path: 'app-collateral-detail', component: CollateralDetailComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
