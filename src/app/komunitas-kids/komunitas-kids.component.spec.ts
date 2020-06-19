import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunitasKidsComponent } from './komunitas-kids.component';

describe('KomunitasKidsComponent', () => {
  let component: KomunitasKidsComponent;
  let fixture: ComponentFixture<KomunitasKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunitasKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunitasKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
