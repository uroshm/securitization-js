import { Component } from '@angular/core';

@Component({
  selector: 'app-interest-rate',
  templateUrl: './interest-rate.component.html',
  styleUrls: ['./interest-rate.component.css'],
})
export class InterestRateComponent {
  title = 'Interest Rate';
  rate = 0.0;
  frequency;
  loanAmount = 0.0;
  loanTerm = 0;
  monthlyPayment = 0.0;
  totalPayment = 0.0;
  totalInterest = 0.0;

  constructor() {
    this.calculate();
    this.loanAmount = 100000;
    this.loanTerm = 360;
    this.interestRate = 4.5;
  }

  ngOnInit() {}

  calculate() {
    let monthlyInterestRate = this.interestRate / 1200;
    this.monthlyPayment =
      (this.loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 / (1 + monthlyInterestRate), this.loanTerm));
    this.totalPayment = this.monthlyPayment * this.loanTerm;
    this.totalInterest = this.totalPayment - this.loanAmount;
  }
}
