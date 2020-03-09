import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsFilterComponent } from './parts-filter.component';

describe('PartsFilterComponent', () => {
  let component: PartsFilterComponent;
  let fixture: ComponentFixture<PartsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
