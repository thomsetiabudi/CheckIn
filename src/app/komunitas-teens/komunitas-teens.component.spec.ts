import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunitasTeensComponent } from './komunitas-teens.component';

describe('KomunitasTeensComponent', () => {
  let component: KomunitasTeensComponent;
  let fixture: ComponentFixture<KomunitasTeensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunitasTeensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunitasTeensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
