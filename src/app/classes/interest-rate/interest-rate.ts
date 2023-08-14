import { Component } from '@angular/core'
import { Frequency } from 'src/app/enum/frequency'

@Component({
    selector: 'app-interest-rate',
    templateUrl: './interest-rate.component.html',
    styleUrls: ['./interest-rate.component.css'],
})
export class InterestRateComponent {
    name: string = 'Interest Rate'
    rate: number = 0.0
    frequency: Frequency = Frequency.Annually
    loanAmount: number = 0.0
    loanTerm: number = 0
    payment: number = 0.0
    totalPayment: number = 0.0
    totalInterest: number = 0.0

    constructor() {}

    calculate() {
        let monthlyInterestRate = this.rate / 1200
        this.payment =
            (this.loanAmount * monthlyInterestRate) /
            (1 - Math.pow(1 / (1 + monthlyInterestRate), this.loanTerm))
        this.totalPayment = this.payment * this.loanTerm
        this.totalInterest = this.totalPayment - this.loanAmount
    }
}
