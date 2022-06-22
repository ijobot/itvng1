import { Injectable } from '@angular/core';
import { Combatant } from './combatant';
import { FunctionsService } from './functions.service';

@Injectable({
  providedIn: 'root',
})
export class CombatantsService {
  public combatantsArray: Combatant[] = [];

  constructor(private functionService: FunctionsService) {}
}