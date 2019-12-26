import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingsTabPageComponent } from './general-settings-tab-page.component';

describe('GeneralSettingsTabPageComponent', () => {
  let component: GeneralSettingsTabPageComponent;
  let fixture: ComponentFixture<GeneralSettingsTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSettingsTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSettingsTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
