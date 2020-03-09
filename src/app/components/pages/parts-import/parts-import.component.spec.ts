import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsImportComponent } from './parts-import.component';

describe('PartsImportComponent', () => {
  let component: PartsImportComponent;
  let fixture: ComponentFixture<PartsImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
