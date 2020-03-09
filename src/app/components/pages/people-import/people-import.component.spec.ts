import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleImportComponent } from './people-import.component';

describe('PeopleImportComponent', () => {
  let component: PeopleImportComponent;
  let fixture: ComponentFixture<PeopleImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
