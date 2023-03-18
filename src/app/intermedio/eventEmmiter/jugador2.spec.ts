import { Player2 } from './jugador2';


describe('Player2 Emmit', () => {
    let player = new Player2();

    beforeEach(() => {
      player = new Player2();
    });

    it('Debe emitir evento cuando recibe daño', () => {

      let newHp = 0;
      player.healthChanges.subscribe(hp => {
        newHp = hp;
      });
      player.damage(1000);

      expect(newHp).toBe(0);
    });

    it('Debe emitir evento cuando recibe daño y sobrevivir si es menos de 100', () => {

      let newHp = 0;
      player.healthChanges.subscribe(hp => {
        newHp = hp;
      });
      player.damage(50);

      expect(newHp).toBe(50);
    });


});
