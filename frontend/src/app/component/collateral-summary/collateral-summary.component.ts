import { Component } from '@angular/core'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
    selector: 'app-collateral-summary',
    templateUrl: './collateral-summary.component.html',
    styleUrls: ['./collateral-summary.component.css'],
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class CollateralSummaryComponent {}
