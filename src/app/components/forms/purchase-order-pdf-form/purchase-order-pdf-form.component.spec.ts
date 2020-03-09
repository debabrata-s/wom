import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderPdfFormComponent } from './purchase-order-pdf-form.component';

describe('PurchaseOrderPdfFormComponent', () => {
  let component: PurchaseOrderPdfFormComponent;
  let fixture: ComponentFixture<PurchaseOrderPdfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderPdfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderPdfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
