import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueIntegrationCapabilitiesComponent } from './value-integration-capabilities.component';

describe('ValueIntegrationCapabilitiesComponent', () => {
  let component: ValueIntegrationCapabilitiesComponent;
  let fixture: ComponentFixture<ValueIntegrationCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueIntegrationCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueIntegrationCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
