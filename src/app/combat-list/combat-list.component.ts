import { Component, OnInit } from '@angular/core';
import { Combatant } from '../combatant';
import { MockCombatants } from '../mock-combatants';
import { CombatantsService } from '../combatants.service';

@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.css'],
})
export class CombatListComponent implements OnInit {
  combatants: Combatant[] = this.combatantsService.combatantsArray;

  constructor(public combatantsService : CombatantsService) {}

  ngOnInit(): void {}
}
