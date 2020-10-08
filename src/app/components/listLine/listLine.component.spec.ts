/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListLineComponent } from './listLine.component';

describe('ListLineComponent', () => {
  let component: ListLineComponent;
  let fixture: ComponentFixture<ListLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
