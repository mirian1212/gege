import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PernasComponent } from './pernas.component';

describe('PernasComponent', () => {
  let component: PernasComponent;
  let fixture: ComponentFixture<PernasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PernasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PernasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
