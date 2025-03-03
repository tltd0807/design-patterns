import { Component } from '@angular/core';
import { IPaymentForm } from '../../../services/payment-factory';

@Component({
  selector: 'cod',
  template: 'cod.component.html',
  styleUrls: ['cod.component.scss'],
})
export class CodComponent implements IPaymentForm {
  constructor() {}

  error(): void {}

  success(): void {}
}
