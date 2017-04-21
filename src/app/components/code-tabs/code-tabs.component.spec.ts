import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTabsComponent } from './code-tabs.component';

describe('CodeTabsComponent', () => {
  let component: CodeTabsComponent;
  let fixture: ComponentFixture<CodeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
