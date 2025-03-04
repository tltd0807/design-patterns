export interface IPaymentForm {
  success(): void;
  error(): void;
}
export interface IPaymentValidator {
  validate(data: any): boolean;
}
