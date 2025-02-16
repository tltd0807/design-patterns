import { Injectable } from '@angular/core';
import { ApiFactoryService } from '../api.service';
import { ApiService } from '../api.service';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserFactoryService extends ApiFactoryService {
  constructor(private userService: UserService) {
    super();
  }

  createService(): ApiService {
    return this.userService;
  }
}
