import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDashboardPageComponent } from './kpi-dashboard-page.component';

describe('KpiDashboardPageComponent', () => {
  let component: KpiDashboardPageComponent;
  let fixture: ComponentFixture<KpiDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
