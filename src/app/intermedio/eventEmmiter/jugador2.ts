import { EventEmitter } from "@angular/core";

export class Player2 {
  health: number;
  healthChanges = new EventEmitter<number>();
  constructor() {
    this.health = 100;
  }

  damage(value: number){
    if (value >= this.health) {
      this.health = 0;
    }else{
      this.health -= value;
    }

    this.healthChanges.emit(this.health);
  }
}
