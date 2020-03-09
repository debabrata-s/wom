import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSamlFormComponent } from './configure-saml-form.component';

describe('ConfigureSamlFormComponent', () => {
  let component: ConfigureSamlFormComponent;
  let fixture: ComponentFixture<ConfigureSamlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureSamlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureSamlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
