import { Player } from "./clases";

describe('Pruebas de clases', () => {
  let player = new Player();

  beforeEach(() => {
    // player.health = 100;
    player = new Player();
  });

  it('Debe retornar 80 si recibe 20', () => {
    // const player = new Player();
    const rta = player.damage(20);

    expect(rta).toBe(80);
  });

  it('Debe retornar 50 si recibe 50', () => {
    // const player = new Player();
    const rta = player.damage(50);
    expect(rta).toBe(50);
  });

  it('Debe retornar 0 si recibe 101', () => {
    // const player = new Player();
    const rta = player.damage(101);
    expect(rta).toBe(0);
  });

});

