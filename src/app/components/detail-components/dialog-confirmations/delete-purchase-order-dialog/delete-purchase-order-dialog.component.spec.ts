import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePurchaseOrderDialogComponent } from './delete-purchase-order-dialog.component';

describe('DeletePurchaseOrderDialogComponent', () => {
  let component: DeletePurchaseOrderDialogComponent;
  let fixture: ComponentFixture<DeletePurchaseOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePurchaseOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePurchaseOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
