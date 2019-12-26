import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFormTemplateComponent } from './request-form-template.component';

describe('RequestFormTemplateComponent', () => {
  let component: RequestFormTemplateComponent;
  let fixture: ComponentFixture<RequestFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
