import { Frequency } from 'src/app/enum/frequency'

export class InterestRateComponent {
    name: string = 'Interest Rate'
    rate: number = 0.0
    frequency: Frequency = Frequency.Annually
    loanAmount: number = 0.0
    loanTerm: number = 0
    payment: number = 0.0
    totalPayment: number = 0.0
    totalInterest: number = 0.0

    constructor(name:string, rate:number, frequency:Frequency, loanAmount:number, loanTerm:number) {
        this.name = name;
        this.rate = rate;
        this.frequency = frequency;
        this.loanAmount = loanAmount;
        this.loanTerm = loanTerm;
    }

    calculate() {
        let monthlyInterestRate = this.rate / 1200
        this.payment =
            (this.loanAmount * monthlyInterestRate) /
            (1 - Math.pow(1 / (1 + monthlyInterestRate), this.loanTerm))
        this.totalPayment = this.payment * this.loanTerm
        this.totalInterest = this.totalPayment - this.loanAmount
    }
}
