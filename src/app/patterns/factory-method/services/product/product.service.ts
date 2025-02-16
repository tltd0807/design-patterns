import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class ProductService implements ApiService {
  getData(): Observable<any> {
    const fakeProducts = [
      { id: 101, name: 'Laptop' },
      { id: 102, name: 'Phone' },
    ];
    return timer(1500).pipe(map(() => fakeProducts));
  }
}
