import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderConfigurationTabPageComponent } from './work-order-configuration-tab-page.component';

describe('WorkOrderConfigurationTabPageComponent', () => {
  let component: WorkOrderConfigurationTabPageComponent;
  let fixture: ComponentFixture<WorkOrderConfigurationTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderConfigurationTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderConfigurationTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
