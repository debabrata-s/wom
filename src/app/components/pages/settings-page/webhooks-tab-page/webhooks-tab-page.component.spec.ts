import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhooksTabPageComponent } from './webhooks-tab-page.component';

describe('WebhooksTabPageComponent', () => {
  let component: WebhooksTabPageComponent;
  let fixture: ComponentFixture<WebhooksTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebhooksTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhooksTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
