import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsImportComponent } from './vendors-import.component';

describe('VendorsImportComponent', () => {
  let component: VendorsImportComponent;
  let fixture: ComponentFixture<VendorsImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
