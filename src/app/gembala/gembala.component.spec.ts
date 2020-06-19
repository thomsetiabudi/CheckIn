import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GembalaComponent } from './gembala.component';

describe('GembalaComponent', () => {
  let component: GembalaComponent;
  let fixture: ComponentFixture<GembalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GembalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GembalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
