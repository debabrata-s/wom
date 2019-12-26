import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationTabPageComponent } from './authentication-tab-page.component';

describe('AuthenticationTabPageComponent', () => {
  let component: AuthenticationTabPageComponent;
  let fixture: ComponentFixture<AuthenticationTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
