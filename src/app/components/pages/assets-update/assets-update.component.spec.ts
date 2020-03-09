import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsUpdateComponent } from './assets-update.component';

describe('AssetsUpdateComponent', () => {
  let component: AssetsUpdateComponent;
  let fixture: ComponentFixture<AssetsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
