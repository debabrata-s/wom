import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsPageComponent } from './ratings-page.component';

describe('RatingsPageComponent', () => {
  let component: RatingsPageComponent;
  let fixture: ComponentFixture<RatingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
