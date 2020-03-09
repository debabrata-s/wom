import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeDialogFormComponent } from './add-time-dialog-form.component';

describe('AddTimeDialogFormComponent', () => {
  let component: AddTimeDialogFormComponent;
  let fixture: ComponentFixture<AddTimeDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimeDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimeDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
