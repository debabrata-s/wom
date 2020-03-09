import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalCostDialogFormComponent } from './additional-cost-dialog-form.component';

describe('AdditionalCostDialogFormComponent', () => {
  let component: AdditionalCostDialogFormComponent;
  let fixture: ComponentFixture<AdditionalCostDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalCostDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalCostDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
