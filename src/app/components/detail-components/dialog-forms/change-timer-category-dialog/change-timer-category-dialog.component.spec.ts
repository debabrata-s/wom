import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTimerCategoryDialogComponent } from './change-timer-category-dialog.component';

describe('ChangeTimerCategoryDialogComponent', () => {
  let component: ChangeTimerCategoryDialogComponent;
  let fixture: ComponentFixture<ChangeTimerCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTimerCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTimerCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
