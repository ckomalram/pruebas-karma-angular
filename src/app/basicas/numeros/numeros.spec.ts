import { incrementar } from "./numeros";

describe('Prueba de numeros', () => {
  it('Debe retornar 100 si es mayor que 100', () => {
    const rta= incrementar(300);
    expect(rta).toBe(100);
  });

  it('Debe retornar numero ingresado + 1 si es menor que 100', () => {
    const rta= incrementar(50);
    expect(rta).toBe(51);
  });


});
