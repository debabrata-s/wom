import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDowntimeDialogComponent } from './add-downtime-dialog.component';

describe('AddDowntimeDialogComponent', () => {
  let component: AddDowntimeDialogComponent;
  let fixture: ComponentFixture<AddDowntimeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDowntimeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDowntimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
