import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDialogFormComponent } from './part-dialog-form.component';

describe('PartDialogFormComponent', () => {
  let component: PartDialogFormComponent;
  let fixture: ComponentFixture<PartDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
