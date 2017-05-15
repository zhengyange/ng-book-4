import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuBuilderComponent } from './form-sku-builder.component';

describe('FormSkuBuilderComponent', () => {
  let component: FormSkuBuilderComponent;
  let fixture: ComponentFixture<FormSkuBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
