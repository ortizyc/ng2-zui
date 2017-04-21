import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRateComponent } from './circle-rate.component';

describe('OpenRateComponent', () => {
  let component: CircleRateComponent;
  let fixture: ComponentFixture<CircleRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
