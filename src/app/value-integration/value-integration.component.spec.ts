import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueIntegrationComponent } from './value-integration.component';

describe('ValueIntegrationComponent', () => {
  let component: ValueIntegrationComponent;
  let fixture: ComponentFixture<ValueIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
