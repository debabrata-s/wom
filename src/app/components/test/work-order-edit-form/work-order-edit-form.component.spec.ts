import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderEditFormComponent } from './work-order-edit-form.component';

describe('WorkOrderEditFormComponent', () => {
  let component: WorkOrderEditFormComponent;
  let fixture: ComponentFixture<WorkOrderEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
