import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private data = new Subject<string>();

  data$ = this.data.asObservable();

  constructor() {}

  sendData(value: string) {
    this.data.next(value);
  }
}
