import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosDeBusquedaComponent } from './resultados-de-busqueda.component';

describe('ResultadosDeBusquedaComponent', () => {
  let component: ResultadosDeBusquedaComponent;
  let fixture: ComponentFixture<ResultadosDeBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosDeBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosDeBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
