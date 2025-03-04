import { Component, Input } from '@angular/core';
import { IPaymentForm, IPaymentValidator } from '../../../shared/payment';

@Component({
  selector: 'credit',
  templateUrl: 'credit.component.html',
  styleUrls: ['credit.component.scss'],
})
export class CreditComponent implements IPaymentForm {
  @Input() validator!: IPaymentValidator;
  public cardNumber: string = '';

  constructor() {}

  error(): void {
    window.alert('Please check card number and try again');
  }

  success(): void {
    window.alert('Yeahhh huuuu');
  }
  // 3566002020360505
  submit(): void {
    if (!this.validator) {
      this.error();
    }
    if (this.validator.validate({ cardNumber: this.cardNumber })) {
      this.success();
    } else {
      this.error();
    }
  }
}
