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

  pushCombatantData(): void {
    console.log('LOGGER: pushCombatantData(), input-modal.component');
    this.combatantsArray.push(
      {
        name: 'Joe',
        type: 'Player',
        score: 15,
        color: 'green',
        ac: 14,
      } as Combatant,
      {
        name: 'Jack',
        type: 'Player',
        score: 18,
        color: 'green',
        ac: 16,
      } as Combatant
    );
    this.sortCombatantList();
    console.log('LOGGER: combatantsArray = ', this.combatantsArray);
  }

  clearCombatants(): void {
    console.log('LOGGER: clearCombatants(), combatant.service');
    this.combatantsArray = [];
    console.log(
      `LOGGER: combat list should be false: ${!!this.combatantsArray.length}`
    );
  }
}
