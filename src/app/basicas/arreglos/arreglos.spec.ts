import { getRobots } from './arreglos';


xdescribe('Prueba de arreglos', () => {
  it('Retornar al menos 3 valores', () => {
    const rta = getRobots();

    expect(rta.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir Optimus y Mazinger', () => {

    const rta = getRobots();

    expect(rta).toContain('Megaman');
    expect(rta).toContain('Optimus');
  });




});
