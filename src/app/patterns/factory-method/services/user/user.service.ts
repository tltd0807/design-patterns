import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class UserService implements ApiService {
  getData(): Observable<any> {
    const fakeUsers = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];

    return timer(1000).pipe(map(() => fakeUsers));
  }
}
