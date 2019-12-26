import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-lazydeneme',
  templateUrl: './lazydeneme.component.html',
  styleUrls: ['./lazydeneme.component.css']
})
export class LazydenemeComponent implements OnInit {

  value = false;
  firstName = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    this.value = !this.value;
  }

  updateInput(){
    this.firstName.setValue('Deneme');
  }
}
