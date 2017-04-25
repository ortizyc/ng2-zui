import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateViewComponent } from './rate-view.component';

describe('RateViewComponent', () => {
  let component: RateViewComponent;
  let fixture: ComponentFixture<RateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
