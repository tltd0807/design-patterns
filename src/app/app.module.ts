import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FactoryMethodDemoComponent } from './patterns/factory-method/factory-method-demo.component';
import { AbstractFactoryDemoComponent } from './patterns/abstract-factory/abstract-factory-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryMethodDemoComponent,
    AbstractFactoryDemoComponent,
  ],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
