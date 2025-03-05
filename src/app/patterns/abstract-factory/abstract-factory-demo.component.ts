import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  CodFactory,
  CreditFactory,
  PayPalFactory,
} from './services/payment-factory';
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
export class AbstractFactoryDemoComponent implements AfterViewInit {
  @ViewChild('paymentContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private CODFactory: CodFactory,
    private paypalFactory: PayPalFactory,
    private creditFactory: CreditFactory,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.onPaymentChange({ target: { value: 'cod' } });
  }
  onPaymentChange(event: any) {
    const paymentType = event.target.value;
    // Nhớ check là gìgì
    this.container.clear();

    let component: any = null;
    let validator: any = null;

    switch (paymentType) {
      case PaymentType.cod:
        component = this.CODFactory.getPaymentForm();
        validator = this.CODFactory.createValidator();
        break;
      case PaymentType.paypal:
        component = this.paypalFactory.getPaymentForm();
        validator = this.paypalFactory.createValidator();
        break;
      case PaymentType.credit:
        component = this.creditFactory.getPaymentForm();
        validator = this.creditFactory.createValidator();
        break;
    }

    if (component && validator) {
      const componentRef = this.container.createComponent(component);
      componentRef.setInput('validator', validator);
      // check lại sao lại detectChanges ở đây
      this.cdr.detectChanges();
    }
  }
}
