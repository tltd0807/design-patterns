import { Component, Input } from '@angular/core';
import { IPaymentForm, IPaymentValidator } from '../../../shared/payment';

@Component({
  selector: 'cod',
  templateUrl: 'cod.component.html',
  styleUrls: ['cod.component.scss'],
})
export class CodComponent implements IPaymentForm {
  @Input() validator!: IPaymentValidator;

  public phoneNumber: string = '';

  constructor() {}

  // Này gọi là overloading
  error(): void;
  error(message?: string): void;

  error(message?: string): void {
    window.alert(`${message}`);
  }

  success(): void {
    window.alert(`Success`);
  }

  submit(): void {
    if (!this.validator) {
      this.error(`Something went wrong try later}`);
    }
    if (this.validator.validate({ phoneNumber: this.phoneNumber })) {
      this.success();
    } else {
      this.error('Please check phone number and try again');
    }
  }
}
