/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DigerComponent } from './diger.component';

describe('DigerComponent', () => {
  let component: DigerComponent;
  let fixture: ComponentFixture<DigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
