import { Injectable } from '@angular/core';
import { PayPalComponent } from '../components/payment/paypal/paypal.component';
import { CreditComponent } from '../components/payment/credit/credit.component';
import { CodComponent } from '../components/payment/cod/cod.component';
import { IPaymentForm, IPaymentValidator } from '../shared/payment';
import {
  CODValidator,
  CreditValidator,
  PayPalValidator,
} from '../shared/validator';

export interface IPaymentFactory {
  getPaymentForm(): IPaymentForm;
  createValidator(): IPaymentValidator;
}

@Injectable({ providedIn: 'root' })
export class PayPalFactory implements IPaymentFactory {
  getPaymentForm(): IPaymentForm {
    return new PayPalComponent();
  }
  createValidator(): IPaymentValidator {
    return new PayPalValidator();
  }
}

@Injectable({ providedIn: 'root' })
export class CreditFactory implements IPaymentFactory {
  getPaymentForm(): IPaymentForm {
    return new CreditComponent();
  }
  createValidator(): IPaymentValidator {
    return new CreditValidator();
  }
}

@Injectable({ providedIn: 'root' })
export class CodFactory implements IPaymentFactory {
  getPaymentForm(): IPaymentForm {
    return new CodComponent();
  }
  createValidator(): IPaymentValidator {
    return new CODValidator();
  }
}
