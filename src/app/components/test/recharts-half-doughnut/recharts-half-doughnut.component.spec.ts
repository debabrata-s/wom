import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechartsHalfDoughnutComponent } from './recharts-half-doughnut.component';

describe('RechartsHalfDoughnutComponent', () => {
  let component: RechartsHalfDoughnutComponent;
  let fixture: ComponentFixture<RechartsHalfDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechartsHalfDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechartsHalfDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
