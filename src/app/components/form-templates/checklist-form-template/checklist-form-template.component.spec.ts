import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistFormTemplateComponent } from './checklist-form-template.component';

describe('ChecklistFormTemplateComponent', () => {
  let component: ChecklistFormTemplateComponent;
  let fixture: ComponentFixture<ChecklistFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
