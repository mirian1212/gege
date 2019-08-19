import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrigaComponent } from './barriga.component';

describe('BarrigaComponent', () => {
  let component: BarrigaComponent;
  let fixture: ComponentFixture<BarrigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrigaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
