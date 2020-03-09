import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderTriggerFormComponent } from './work-order-trigger-form.component';

describe('WorkOrderTriggerFormComponent', () => {
  let component: WorkOrderTriggerFormComponent;
  let fixture: ComponentFixture<WorkOrderTriggerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderTriggerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderTriggerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
