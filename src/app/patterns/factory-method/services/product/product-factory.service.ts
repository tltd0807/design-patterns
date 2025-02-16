import { Injectable } from '@angular/core';
import { ApiFactoryService } from '../api.service';
import { ApiService } from '../api.service';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class ProductFactoryService extends ApiFactoryService {
  constructor(private productService: ProductService) {
    super();
  }

  createService(): ApiService {
    return this.productService;
  }
}
