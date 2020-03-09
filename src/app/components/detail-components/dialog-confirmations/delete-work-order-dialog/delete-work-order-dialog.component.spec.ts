import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorkOrderDialogComponent } from './delete-work-order-dialog.component';

describe('DeleteWorkOrderDialogComponent', () => {
  let component: DeleteWorkOrderDialogComponent;
  let fixture: ComponentFixture<DeleteWorkOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWorkOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWorkOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
