import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private updateTableSource = new Subject<void>();

  updateTable$ = this.updateTableSource.asObservable();

  constructor() { }

  notifyUpdate() {
    this.updateTableSource.next();
  }
}
