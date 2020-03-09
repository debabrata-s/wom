import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilesDialogFormComponent } from './add-files-dialog-form.component';

describe('AddFilesDialogFormComponent', () => {
  let component: AddFilesDialogFormComponent;
  let fixture: ComponentFixture<AddFilesDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilesDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilesDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
