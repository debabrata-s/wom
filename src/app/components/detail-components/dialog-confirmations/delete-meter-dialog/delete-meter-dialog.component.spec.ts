import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeterDialogComponent } from './delete-meter-dialog.component';

describe('DeleteMeterDialogComponent', () => {
  let component: DeleteMeterDialogComponent;
  let fixture: ComponentFixture<DeleteMeterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMeterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMeterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
