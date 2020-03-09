import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocationDialogComponent } from './delete-location-dialog.component';

describe('DeleteLocationDialogComponent', () => {
  let component: DeleteLocationDialogComponent;
  let fixture: ComponentFixture<DeleteLocationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLocationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
