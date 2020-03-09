import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfPartDetailsComponent } from './set-of-part-details.component';

describe('SetOfPartDetailsComponent', () => {
  let component: SetOfPartDetailsComponent;
  let fixture: ComponentFixture<SetOfPartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOfPartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOfPartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
