import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhookFormComponent } from './webhook-form.component';

describe('WebhookFormComponent', () => {
  let component: WebhookFormComponent;
  let fixture: ComponentFixture<WebhookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebhookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
