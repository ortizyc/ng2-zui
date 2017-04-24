import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavatarComponent } from './zavatar.component';

describe('ZavatarComponent', () => {
  let component: ZavatarComponent;
  let fixture: ComponentFixture<ZavatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZavatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
