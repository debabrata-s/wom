import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAndPlannerPageComponent } from './log-and-planner-page.component';

describe('LogAndPlannerPageComponent', () => {
  let component: LogAndPlannerPageComponent;
  let fixture: ComponentFixture<LogAndPlannerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAndPlannerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAndPlannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
