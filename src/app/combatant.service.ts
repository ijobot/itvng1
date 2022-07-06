import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Combatant } from './combatant';

@Injectable({
  providedIn: 'root',
})
export class CombatantService {
  public combatantsArray: Combatant[] = [];
  public combatantsObservable$ = new Observable((observer) => {
    console.log('hey joe, this is the observable');
    const combatantsArrayForObs = this.combatantsArray;
  });
  public combatantCreated = new EventEmitter();

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
    this.combatantCreated.emit(Combatant);
    this.sortCombatantList();
  }

  clearCombatants(): void {
    console.log('LOGGER: clearCombatants(), combatant.service');
    this.combatantsArray = [];
  }
}
