import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InterestRateComponent } from './interest-rate'

describe('InterestRateComponent', () => {
    let component: InterestRateComponent
    let fixture: ComponentFixture<InterestRateComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [InterestRateComponent],
        })
        fixture = TestBed.createComponent(InterestRateComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
