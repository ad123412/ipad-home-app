import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalExperianceComponent } from './digital-experiance.component';

describe('DigitalExperianceComponent', () => {
  let component: DigitalExperianceComponent;
  let fixture: ComponentFixture<DigitalExperianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalExperianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
