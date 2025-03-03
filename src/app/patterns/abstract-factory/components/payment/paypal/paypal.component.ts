import { Component, OnInit } from '@angular/core';
import { IPaymentForm } from '../../../services/payment-factory';

@Component({
  selector: 'paypal',
  templateUrl: 'paypal.component.html',
  styleUrls: ['paypal.component.scss'],
})
export class PayPalComponent implements IPaymentForm, OnInit {
  constructor() {}
  ngOnInit(): void {}

  error(): void {}
  success(): void {}
}
