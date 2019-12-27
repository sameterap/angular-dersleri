import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-lazydeneme',
  templateUrl: './lazydeneme.component.html',
  styleUrls: ['./lazydeneme.component.css']
})
export class LazydenemeComponent implements OnInit, AfterViewInit {

  @ViewChild('pRef', { static: false }) pRef: ElementRef;

  value = false;
  firstName = new FormControl('', Validators.required);
  constructor() { }



  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.pRef.nativeElement.innerHtml);
    this.pRef.nativeElement.innerHtml = 'Değiştirdik';
  }

  changeColor() {
    this.value = !this.value;
  }

  updateInput() {
    this.firstName.setValue('Deneme');
  }
}
