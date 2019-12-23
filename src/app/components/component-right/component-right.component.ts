import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-component-right',
  templateUrl: './component-right.component.html',
  styleUrls: ['./component-right.component.css']
})
export class ComponentRightComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject<void>();
  comingData: string;
  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.subscribeToLeft();
  }

  private subscribeToLeft() {
    this.dataTransferService.getDataToRight$
      .pipe(takeUntil(this.destroySubject))
      .subscribe((res: string) => {
        this.comingData = res;
      });
  }

  sendData() {
    this.dataTransferService.sendDataToLeft('Bu data sagdan gelen data');
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

}
