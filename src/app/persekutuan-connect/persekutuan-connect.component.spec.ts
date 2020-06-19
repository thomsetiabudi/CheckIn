import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersekutuanConnectComponent } from './persekutuan-connect.component';

describe('PersekutuanConnectComponent', () => {
  let component: PersekutuanConnectComponent;
  let fixture: ComponentFixture<PersekutuanConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersekutuanConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersekutuanConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
