import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderFilterComponent } from './work-order-filter.component';

describe('WorkOrderFilterComponent', () => {
  let component: WorkOrderFilterComponent;
  let fixture: ComponentFixture<WorkOrderFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
