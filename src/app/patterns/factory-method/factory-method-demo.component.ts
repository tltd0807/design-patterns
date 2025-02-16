import { Component, OnInit } from '@angular/core';
import { UserFactoryService } from './services/user/user-factory.service';
import { ProductFactoryService } from './services/product/product-factory.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-factory-method-demo',
  templateUrl: './factory-method-demo.component.html',
  styleUrls: ['./factory-method-demo.component.scss'],
})
export class FactoryMethodDemoComponent implements OnInit {
  userData: any[] = [];
  productData: any[] = [];

  constructor(
    private userFactory: UserFactoryService,
    private productFactory: ProductFactoryService
  ) {}

  ngOnInit(): void {
    // this.loadUserData();
    // this.loadProductData();
  }

  loadUserData(): void {
    const userService: ApiService = this.userFactory.createService();
    userService.getData().subscribe((data: any) => {
      console.log('User Data:', data);
      this.userData = data;
    });
  }

  loadProductData(): void {
    const productService: ApiService = this.productFactory.createService();
    productService.getData().subscribe((data: any) => {
      console.log('Product Data:', data);
      this.productData = data;
    });
  }
}
