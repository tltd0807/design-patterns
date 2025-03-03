import { Injectable } from '@angular/core';
import { PayPalComponent } from '../components/payment/paypal/paypal.component';

export interface IPaymentForm {
  success(): void;
  error(): void;
}

export interface IPaymentFactory {
  getPaymentForm(): IPaymentForm;
}

@Injectable({ providedIn: 'root' })
export class PayPalFactory implements IPaymentFactory {
  getPaymentForm(): IPaymentForm {
    return PayPalComponent;
  }
}
