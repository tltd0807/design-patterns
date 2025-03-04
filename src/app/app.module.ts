import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FactoryMethodDemoComponent } from './patterns/factory-method/factory-method-demo.component';
import { AbstractFactoryDemoComponent } from './patterns/abstract-factory/abstract-factory-demo.component';
import { FormsModule } from '@angular/forms';
import { PayPalComponent } from './patterns/abstract-factory/components/payment/paypal/paypal.component';
import { CreditComponent } from './patterns/abstract-factory/components/payment/credit/credit.component';
import { CodComponent } from './patterns/abstract-factory/components/payment/cod/cod.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryMethodDemoComponent,
    AbstractFactoryDemoComponent,
    PayPalComponent,
    CreditComponent,
    CodComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
