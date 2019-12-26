import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPortalPageComponent } from './request-portal-page.component';

describe('RequestPortalPageComponent', () => {
  let component: RequestPortalPageComponent;
  let fixture: ComponentFixture<RequestPortalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPortalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
