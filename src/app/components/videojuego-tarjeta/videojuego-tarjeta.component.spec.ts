import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoTarjetaComponent } from './videojuego-tarjeta.component';

describe('VideojuegoTarjetaComponent', () => {
  let component: VideojuegoTarjetaComponent;
  let fixture: ComponentFixture<VideojuegoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
