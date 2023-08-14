import { Component } from '@angular/core';
import { InterestRateComponent } from '../interest-rate/interest-rate.component';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
})
export class LoanComponent {
  title = 'Loan';
  interestRate: InterestRateComponent = 0.0;
  loanAmount = 0.0;
  loanTerm = 0;
  monthlyPayment = 0.0;
  totalPayment = 0.0;
  totalInterest = 0.0;

  constructor() {}

  ngOnInit() {}
}
