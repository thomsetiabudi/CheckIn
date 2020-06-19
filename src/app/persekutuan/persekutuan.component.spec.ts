import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersekutuanComponent } from './persekutuan.component';

describe('PersekutuanComponent', () => {
  let component: PersekutuanComponent;
  let fixture: ComponentFixture<PersekutuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersekutuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersekutuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
