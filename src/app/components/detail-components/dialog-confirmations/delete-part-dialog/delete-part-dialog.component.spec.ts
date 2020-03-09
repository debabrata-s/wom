import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartDialogComponent } from './delete-part-dialog.component';

describe('DeletePartDialogComponent', () => {
  let component: DeletePartDialogComponent;
  let fixture: ComponentFixture<DeletePartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
