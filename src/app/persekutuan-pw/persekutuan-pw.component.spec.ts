import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersekutuanPwComponent } from './persekutuan-pw.component';

describe('PersekutuanPwComponent', () => {
  let component: PersekutuanPwComponent;
  let fixture: ComponentFixture<PersekutuanPwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersekutuanPwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersekutuanPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
