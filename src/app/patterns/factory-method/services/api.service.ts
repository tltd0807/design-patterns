import { Observable } from 'rxjs';

// Product
export interface ApiService {
  getData(): Observable<any>;
}

// Creator
export abstract class ApiFactoryService {
  abstract createService(): ApiService;
}
