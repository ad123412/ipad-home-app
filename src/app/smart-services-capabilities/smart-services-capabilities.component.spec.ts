import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartServicesCapabilitiesComponent } from './smart-services-capabilities.component';

describe('SmartServicesCapabilitiesComponent', () => {
  let component: SmartServicesCapabilitiesComponent;
  let fixture: ComponentFixture<SmartServicesCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartServicesCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartServicesCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
