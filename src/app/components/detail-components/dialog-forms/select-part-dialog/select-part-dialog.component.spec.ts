import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPartDialogComponent } from './select-part-dialog.component';

describe('SelectPartDialogComponent', () => {
  let component: SelectPartDialogComponent;
  let fixture: ComponentFixture<SelectPartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
