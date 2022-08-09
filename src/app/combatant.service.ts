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
    type: string,
    color: string
  ): void {
    console.log('LOGGER: createCombatant(), combatant.service');
    const newCombatant = { name, score, type, color } as Combatant;
    this.combatantsArray.push(newCombatant);
    this.sortCombatantList();
  }

  clearCombatants(): void {
    console.log('LOGGER: clearCombatants(), combatant.service');
    this.combatantsArray = [];
  }
}
