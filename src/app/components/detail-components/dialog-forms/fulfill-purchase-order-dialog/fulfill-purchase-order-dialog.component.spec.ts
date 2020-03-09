import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillPurchaseOrderDialogComponent } from './fulfill-purchase-order-dialog.component';

describe('FulfillPurchaseOrderDialogComponent', () => {
  let component: FulfillPurchaseOrderDialogComponent;
  let fixture: ComponentFixture<FulfillPurchaseOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfillPurchaseOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillPurchaseOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
