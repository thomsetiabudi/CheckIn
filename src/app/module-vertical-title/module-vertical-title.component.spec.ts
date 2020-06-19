import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleVerticalTitleComponent } from './module-vertical-title.component';

describe('ModuleVerticalTitleComponent', () => {
  let component: ModuleVerticalTitleComponent;
  let fixture: ComponentFixture<ModuleVerticalTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleVerticalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleVerticalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
