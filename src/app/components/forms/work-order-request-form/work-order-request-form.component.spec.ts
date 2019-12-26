import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderRequestFormComponent } from './work-order-request-form.component';

describe('WorkOrderRequestFormComponent', () => {
  let component: WorkOrderRequestFormComponent;
  let fixture: ComponentFixture<WorkOrderRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
