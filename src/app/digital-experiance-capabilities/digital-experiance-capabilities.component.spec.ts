import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalExperianceCapabilitiesComponent } from './digital-experiance-capabilities.component';

describe('DigitalExperianceCapabilitiesComponent', () => {
  let component: DigitalExperianceCapabilitiesComponent;
  let fixture: ComponentFixture<DigitalExperianceCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalExperianceCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalExperianceCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
