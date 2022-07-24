import { NoopAnimationPlayer } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Combatant } from './combatant';

@Injectable({
  providedIn: 'root',
})

export class CombatantService {
  combatantsArray: Combatant[] = [];

  public observable:any = of(this.combatantsArray)


  // public observable:any = new Observable(subscriber => {
  //   console.log('Observable has started)');
  //   subscriber.next(this.combatantsArray)
  // })

  // ^^^^ We want this to be the observable.    public combatantsArray: Combatant[] = [];

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
    // console.log(this.combatantsArray)
    console.log(this.observable.combatantsArray)
    console.log(this.observable.next)
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
