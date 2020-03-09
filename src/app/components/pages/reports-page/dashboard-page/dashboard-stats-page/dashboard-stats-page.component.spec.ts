import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatsPageComponent } from './dashboard-stats-page.component';

describe('DashboardStatsPageComponent', () => {
  let component: DashboardStatsPageComponent;
  let fixture: ComponentFixture<DashboardStatsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStatsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
