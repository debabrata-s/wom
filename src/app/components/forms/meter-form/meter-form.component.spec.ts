import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterFormComponent } from './meter-form.component';

describe('MeterFormComponent', () => {
  let component: MeterFormComponent;
  let fixture: ComponentFixture<MeterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
