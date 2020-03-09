import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsUpdateComponent } from './parts-update.component';

describe('PartsUpdateComponent', () => {
  let component: PartsUpdateComponent;
  let fixture: ComponentFixture<PartsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
