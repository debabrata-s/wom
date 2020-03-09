import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfPartsFormComponent } from './set-of-parts-form.component';

describe('SetOfPartsFormComponent', () => {
  let component: SetOfPartsFormComponent;
  let fixture: ComponentFixture<SetOfPartsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOfPartsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOfPartsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
