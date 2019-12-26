import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedWorkflowsTabPageComponent } from './automated-workflows-tab-page.component';

describe('AutomatedWorkflowsTabPageComponent', () => {
  let component: AutomatedWorkflowsTabPageComponent;
  let fixture: ComponentFixture<AutomatedWorkflowsTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatedWorkflowsTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatedWorkflowsTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
