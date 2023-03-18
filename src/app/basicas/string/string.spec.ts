import { mensaje } from "./string";


describe('pruebas de strings', () => {
    it('Debe regresar un string', () => {
        const rta = mensaje('Carlyle');

        expect(typeof rta).toBe('string');
    });
});
