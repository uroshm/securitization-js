import { InterestRateComponent } from '../interest-rate/interest-rate'

export class Loan {
    title = 'Loan'
    interestRate: InterestRateComponent = new InterestRateComponent("Default", 0.0, 0, 0.0, 0);
    loanAmount = 0.0
    loanTerm = 0
    monthlyPayment = 0.0
    totalPayment = 0.0
    totalInterest = 0.0

    constructor() {}
}
