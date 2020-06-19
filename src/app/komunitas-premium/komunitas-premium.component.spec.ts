import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunitasPremiumComponent } from './komunitas-premium.component';

describe('KomunitasPremiumComponent', () => {
  let component: KomunitasPremiumComponent;
  let fixture: ComponentFixture<KomunitasPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunitasPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunitasPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
