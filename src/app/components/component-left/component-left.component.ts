import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-component-left',
  templateUrl: './component-left.component.html',
  styleUrls: ['./component-left.component.css']
})
export class ComponentLeftComponent implements OnInit, OnDestroy {

  comingData: string;
  // subscription: Subscription;
  subscriptionList: Subscription[] = [];

  constructor(private dataTranserService: DataTransferService) { }

  ngOnInit() {

    this.subscribeToRight();

  }

  private subscribeToRight() {
    // this.subscription = this.dataTranserService.getDataToLeft$.subscribe(data => {
    //   this.comingData = data;
    // });

    const sub = this.dataTranserService.getDataToLeft$.subscribe(data => {
      this.comingData = data;
    });

    this.subscriptionList.push(sub);
  }

  sendData() {
    this.dataTranserService.sendDataToRight('Bu data soldan gelen data');
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    this.subscriptionList.forEach(sub => sub.unsubscribe());
  }



  // obsservableOrnegi(){
  //   const observable = Observable.create(observer => {
  //     setInterval(() => {
  //       observer.next('gönderilecek data');
  //       observer.complete();
  //       console.log('tamamlandı');
  //     }, 2000);
  //   });

  //   observable.subscribe((data) => {
  //     console.log(data);
  //   });
  // }

}
