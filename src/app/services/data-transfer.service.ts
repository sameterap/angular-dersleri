import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private sendDataToRightSource = new Subject<string>();
  private sendDataToLeftSource = new Subject<string>();

  getDataToRight$: Observable<string> = this.sendDataToRightSource.asObservable();
  getDataToLeft$: Observable<string> = this.sendDataToLeftSource.asObservable();

  sendDataToRight(data: string) {
    this.sendDataToRightSource.next(data);
  }

  sendDataToLeft(data: string) {
    this.sendDataToLeftSource.next(data);
  }

  constructor() { }

}
