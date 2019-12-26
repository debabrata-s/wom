import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWorkOrdersPageComponent } from './shared-work-orders-page.component';

describe('SharedWorkOrdersPageComponent', () => {
  let component: SharedWorkOrdersPageComponent;
  let fixture: ComponentFixture<SharedWorkOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedWorkOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedWorkOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
