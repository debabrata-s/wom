import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistsTabPageComponent } from './checklists-tab-page.component';

describe('ChecklistsTabPageComponent', () => {
  let component: ChecklistsTabPageComponent;
  let fixture: ComponentFixture<ChecklistsTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistsTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistsTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
