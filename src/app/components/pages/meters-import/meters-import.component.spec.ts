import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetersImportComponent } from './meters-import.component';

describe('MetersImportComponent', () => {
  let component: MetersImportComponent;
  let fixture: ComponentFixture<MetersImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetersImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
