import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelcoMenuesComponent } from './telco-menues.component';

describe('TelcoMenuesComponent', () => {
  let component: TelcoMenuesComponent;
  let fixture: ComponentFixture<TelcoMenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelcoMenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelcoMenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
