import { Component } from '@angular/core';
import { IPaymentForm } from '../../../services/payment-factory';

@Component({
  selector: 'credit',
  template: 'credit.component.html',
  styleUrls: ['credit.component.scss'],
})
export class CreditComponent implements IPaymentForm {
  constructor() {}

  error(): void {}

  success(): void {}
}
