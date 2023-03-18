import { login } from "./boleanos";

describe('Pruebas de booleanos', () => {
  it('Debe retornar True', () => {
    const rta = login();

    expect(rta).toBe(true);
  });

});
