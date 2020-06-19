import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBackgroundImageComponent } from './dynamic-background-image.component';

describe('DynamicBackgroundImageComponent', () => {
  let component: DynamicBackgroundImageComponent;
  let fixture: ComponentFixture<DynamicBackgroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicBackgroundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
