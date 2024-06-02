import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CollateralSummaryComponent } from './collateral-summary.component'

describe('CollateralSummaryComponent', () => {
    let component: CollateralSummaryComponent
    let fixture: ComponentFixture<CollateralSummaryComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CollateralSummaryComponent],
        })
        fixture = TestBed.createComponent(CollateralSummaryComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
