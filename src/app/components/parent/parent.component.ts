import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dataToSend: string;
  inputData: string;
  constructor() { }

  ngOnInit() {
  }

  sendData() {
    this.dataToSend = this.inputData;
  }

  displaySentData(comingData: string) {
    this.inputData = comingData;
  }
}
