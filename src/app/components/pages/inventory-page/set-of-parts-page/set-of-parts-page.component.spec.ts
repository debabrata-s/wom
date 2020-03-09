import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfPartsPageComponent } from './set-of-parts-page.component';

describe('SetOfPartsPageComponent', () => {
  let component: SetOfPartsPageComponent;
  let fixture: ComponentFixture<SetOfPartsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOfPartsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOfPartsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
