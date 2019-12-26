import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantPageComponent } from './assistant-page.component';

describe('AssistantPageComponent', () => {
  let component: AssistantPageComponent;
  let fixture: ComponentFixture<AssistantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
