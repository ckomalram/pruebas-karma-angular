export class Player {
  health: number;
  constructor() {
    this.health = 100;
  }

  damage(value: number){
    if (value >= this.health) {
      this.health = 0;
    }else{
      this.health -= value;
    }

    return this.health;
  }
}
