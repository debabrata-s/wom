import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartEditFormComponent } from './part-edit-form.component';

describe('PartEditFormComponent', () => {
  let component: PartEditFormComponent;
  let fixture: ComponentFixture<PartEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
