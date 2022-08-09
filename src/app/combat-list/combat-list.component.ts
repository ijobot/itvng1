import { Component, OnInit } from '@angular/core';
import { CombatantService } from '../combatant.service';
import { Combatant } from './../combatant';

@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.css'],
})
export class CombatListComponent implements OnInit {
  public combatants: Combatant[] = this.combatantService.combatantsArray;

  constructor(public combatantService: CombatantService) {}

  ngOnInit(): void {
    console.log('LOGGER: ngOnInit(), combat-list.component');
  }
}
