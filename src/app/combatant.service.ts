import { NoopAnimationPlayer } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Combatant } from './combatant';

@Injectable({
  providedIn: 'root',
})
export class CombatantService {
  public combatantsArray: Combatant[] = [];

  constructor() {}

  sortCombatantList(): void {
    console.log('LOGGER: sortCombatantList(), combatant.service');
    this.combatantsArray.sort((a, b) => {
      return b.score - a.score;
    });
  }

  createCombatant(
    name: string,
    score: number,
    ac: number,
    type: string,
    color: string
  ): void {
    console.log('LOGGER: createCombatant(), combatant.service');
    this.combatantsArray.push({
      name: name,
      type: type,
      score: score,
      color: color,
      ac: ac,
    } as Combatant);
    this.sortCombatantList();
  }

  clearCombatants(): void {
    console.log('LOGGER: clearCombatants(), combatant.service');
    // this.combatantsArray = [];
    // for (let i = 0; i < this.combatantsArray.length; i++) {
    //   this.combatantsArray.pop()
    // }
    this.combatantsArray.forEach(combatant => this.combatantsArray.pop())
    this.combatantsArray.forEach(combatant => this.combatantsArray.shift())
    this.combatantsArray.shift()
    this.combatantsArray.pop()
    console.log(
      `LOGGER: combat list should be false: ${!!this.combatantsArray.length}`
    );
  }
}
