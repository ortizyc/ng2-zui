import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlistComponent } from './zlist.component';

describe('ZlistComponent', () => {
  let component: ZlistComponent;
  let fixture: ComponentFixture<ZlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
