import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartServicesHomeComponent } from './smart-services-home.component';

describe('SmartServicesHomeComponent', () => {
  let component: SmartServicesHomeComponent;
  let fixture: ComponentFixture<SmartServicesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartServicesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
