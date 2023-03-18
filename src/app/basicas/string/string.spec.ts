import { mensaje } from "./string";


describe('pruebas de strings', () => {
    it('Debe regresar un string', () => {
        const rta = mensaje('Carlyle');

        expect(typeof rta).toBe('string');
    });

    it('Debe regresar un saludo con nombre enviado', () => {
      const nombre = 'Juan';
      const rta = mensaje(nombre);
      expect(rta).toContain('Saludos ' + nombre);
  });
});
