import { IPaymentValidator } from './payment';

export class CODValidator implements IPaymentValidator {
  vietnamPhoneRegex = /^(?:\+84|0)(3|5|7|8|9)[0-9]{8}$/;

  validate(data: any): boolean {
    return this.vietnamPhoneRegex.test(data.phoneNumber);
  }
}

export class CreditValidator implements IPaymentValidator {
  creditCardRegex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
  validate(data: any): boolean {
    return this.creditCardRegex.test(data.cardNumber.replace(/\D/g, ''));
  }
}

export class PayPalValidator implements IPaymentValidator {
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  validate(data: any): boolean {
    return this.emailRegex.test(data.email);
  }
}
