import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChecklistDialogComponent } from './select-checklist-dialog.component';

describe('SelectChecklistDialogComponent', () => {
  let component: SelectChecklistDialogComponent;
  let fixture: ComponentFixture<SelectChecklistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChecklistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChecklistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
