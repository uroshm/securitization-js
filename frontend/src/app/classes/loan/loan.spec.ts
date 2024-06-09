import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Loan } from './loan'

describe('LoanComponent', () => {
    let component: Loan
    let fixture: ComponentFixture<Loan>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Loan],
        })
        fixture = TestBed.createComponent(Loan)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
