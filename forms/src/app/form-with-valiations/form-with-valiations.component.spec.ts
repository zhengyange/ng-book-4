import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithValiationsComponent } from './form-with-valiations.component';

describe('FormWithValiationsComponent', () => {
  let component: FormWithValiationsComponent;
  let fixture: ComponentFixture<FormWithValiationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithValiationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithValiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
