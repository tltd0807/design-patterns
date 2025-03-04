import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  CodFactory,
  CreditFactory,
  IPaymentFactory,
  PayPalFactory,
} from './services/payment-factory';
import { CodComponent } from './components/payment/cod/cod.component';
import { PayPalComponent } from './components/payment/paypal/paypal.component';
import { CreditComponent } from './components/payment/credit/credit.component';
enum PaymentType {
  cod = 'cod',
  paypal = 'paypal',
  credit = 'credit',
}
@Component({
  selector: 'abstract-demo',
  templateUrl: './abstract-factory-demo.component.html',
  styleUrls: ['./abstract-factory-demo.component.scss'],
})
export class AbstractFactoryDemoComponent implements OnInit {
  @ViewChild('paymentContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private CODFactory: CodFactory,
    private paypalFactory: PayPalFactory,
    private creditFactory: CreditFactory
  ) {}

  ngOnInit() {
    this.onPaymentChange({ target: { value: 'momo' } });
  }

  onPaymentChange(event: any) {
    const paymentType = event.target.value;
    this.container.clear();

    let component: any = null;
    let factory: IPaymentFactory | null = null;

    switch (paymentType) {
      case PaymentType.cod:
        component = CodComponent;
        factory = this.CODFactory;
        break;
      case PaymentType.paypal:
        component = PayPalComponent;
        factory = this.paypalFactory;
        break;
      case PaymentType.credit:
        component = CreditComponent;
        factory = this.creditFactory;
        break;
    }

    if (component && factory) {
      const componentRef = this.container.createComponent(component);

      componentRef.setInput('validator', factory);
    }
  }
}
