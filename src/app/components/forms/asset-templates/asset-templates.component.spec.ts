import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTemplatesComponent } from './asset-templates.component';

describe('AssetTemplatesComponent', () => {
  let component: AssetTemplatesComponent;
  let fixture: ComponentFixture<AssetTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
