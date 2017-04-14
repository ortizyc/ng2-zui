import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridButtonComponent } from './grid-button.component';

describe('GridButtonComponent', () => {
  let component: GridButtonComponent;
  let fixture: ComponentFixture<GridButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
