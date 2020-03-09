import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameFileDialogFormComponent } from './rename-file-dialog-form.component';

describe('RenameFileDialogFormComponent', () => {
  let component: RenameFileDialogFormComponent;
  let fixture: ComponentFixture<RenameFileDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameFileDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameFileDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
