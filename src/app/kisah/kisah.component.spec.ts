import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisahComponent } from './kisah.component';

describe('KisahComponent', () => {
  let component: KisahComponent;
  let fixture: ComponentFixture<KisahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
