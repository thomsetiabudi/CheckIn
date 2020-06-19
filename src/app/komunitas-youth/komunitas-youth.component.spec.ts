import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunitasYouthComponent } from './komunitas-youth.component';

describe('KomunitasYouthComponent', () => {
  let component: KomunitasYouthComponent;
  let fixture: ComponentFixture<KomunitasYouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunitasYouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunitasYouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
