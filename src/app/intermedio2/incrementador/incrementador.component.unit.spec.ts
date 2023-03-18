import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador - Pruebas unitarias', () => {
  let componente: IncrementadorComponent;

  beforeEach(() => (componente = new IncrementadorComponent()));

  it('Unitaria - Progreso validar incremento', () => {
    componente.progreso = 50;
    componente.cambiarValor(5);

    expect(componente.progreso).toBe(55);
  });

  it('Unitaria - Progreso no pasar de 100', () => {
    componente.progreso = 100;
    componente.cambiarValor(5);

    expect(componente.progreso).toBe(100);
  });
});
