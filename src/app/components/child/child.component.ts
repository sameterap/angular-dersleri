import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: string;
  @Output() valueChanged = new EventEmitter();
  selectedOption: any;

  dataSource = [
    { value: 'insan', display: 'İnsan' },
    { value: 'hayvan', display: 'Hayvan' },
    { value: 'cihaz', display: 'Cihaz' },
    { value: 'mutfak', display: 'Mutfak' },
    { value: 'masa', display: 'Masa' },
  ];

  constructor() { }

  ngOnInit() {
  }

  sendData() {
    // console.log(this.selectedOption);

    this.valueChanged.emit(this.selectedOption);
  }

  setDropdown() {
    this.selectedOption = this.data;
  }

}
