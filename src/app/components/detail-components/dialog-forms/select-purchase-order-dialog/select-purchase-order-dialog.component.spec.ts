import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPurchaseOrderDialogComponent } from './select-purchase-order-dialog.component';

describe('SelectPurchaseOrderDialogComponent', () => {
  let component: SelectPurchaseOrderDialogComponent;
  let fixture: ComponentFixture<SelectPurchaseOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPurchaseOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPurchaseOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
