import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRateComponent } from './open-rate.component';

describe('OpenRateComponent', () => {
  let component: OpenRateComponent;
  let fixture: ComponentFixture<OpenRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
