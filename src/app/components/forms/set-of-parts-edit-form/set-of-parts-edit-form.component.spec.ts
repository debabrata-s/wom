import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfPartsEditFormComponent } from './set-of-parts-edit-form.component';

describe('SetOfPartsEditFormComponent', () => {
  let component: SetOfPartsEditFormComponent;
  let fixture: ComponentFixture<SetOfPartsEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOfPartsEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOfPartsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
