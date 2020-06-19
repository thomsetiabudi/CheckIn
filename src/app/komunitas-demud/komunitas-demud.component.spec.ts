import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunitasDemudComponent } from './komunitas-demud.component';

describe('KomunitasDemudComponent', () => {
  let component: KomunitasDemudComponent;
  let fixture: ComponentFixture<KomunitasDemudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunitasDemudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunitasDemudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
