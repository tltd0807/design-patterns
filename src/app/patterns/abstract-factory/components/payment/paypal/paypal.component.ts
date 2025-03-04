import { Component, Input, OnInit } from '@angular/core';
import { IPaymentForm, IPaymentValidator } from '../../../shared/payment';

@Component({
  selector: 'paypal',
  templateUrl: 'paypal.component.html',
  styleUrls: ['paypal.component.scss'],
})
export class PayPalComponent implements IPaymentForm {
  @Input() validator!: IPaymentValidator;
  public email: string = '';

  constructor() {}

  error(): void {
    window.alert('Your email is wrong try different');
  }

  success(): void {
    window.alert('As huhuuhh');
  }
  // 3566002020360505
  submit(): void {
    if (!this.validator) {
      this.error();
    }
    if (this.validator.validate({ email: this.email })) {
      this.success();
    } else {
      this.error();
    }
  }
}
