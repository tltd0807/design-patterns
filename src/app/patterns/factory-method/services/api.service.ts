import { Observable } from 'rxjs';

export interface ApiService {
  getData(): Observable<any>;
}

export abstract class ApiFactoryService {
  abstract createService(): ApiService;
}
