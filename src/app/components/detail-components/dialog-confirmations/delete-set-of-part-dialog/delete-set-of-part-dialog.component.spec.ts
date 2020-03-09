import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSetOfPartDialogComponent } from './delete-set-of-part-dialog.component';

describe('DeleteSetOfPartDialogComponent', () => {
  let component: DeleteSetOfPartDialogComponent;
  let fixture: ComponentFixture<DeleteSetOfPartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSetOfPartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSetOfPartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
