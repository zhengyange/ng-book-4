import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdrComponent } from './ngdr.component';

describe('NgdrComponent', () => {
  let component: NgdrComponent;
  let fixture: ComponentFixture<NgdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
