import { Component, OnInit } from '@angular/core';
import { Combatant } from '../combatant';
import { MockCombatants } from '../mock-combatants';

@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.css'],
})
export class CombatListComponent implements OnInit {
  combatants: Combatant[] = MockCombatants;

  constructor() {}

  ngOnInit(): void {}
}
