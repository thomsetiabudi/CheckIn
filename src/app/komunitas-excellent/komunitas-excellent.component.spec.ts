import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunitasExcellentComponent } from './komunitas-excellent.component';

describe('KomunitasExcellentComponent', () => {
  let component: KomunitasExcellentComponent;
  let fixture: ComponentFixture<KomunitasExcellentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunitasExcellentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunitasExcellentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
