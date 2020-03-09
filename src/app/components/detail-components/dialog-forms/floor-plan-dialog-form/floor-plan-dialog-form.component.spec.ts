import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlanDialogFormComponent } from './floor-plan-dialog-form.component';

describe('FloorPlanDialogFormComponent', () => {
  let component: FloorPlanDialogFormComponent;
  let fixture: ComponentFixture<FloorPlanDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorPlanDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorPlanDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
