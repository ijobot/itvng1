import { Component, OnInit, Output } from '@angular/core';
import { Combatant } from '../combatant';
import { CombatantService } from '../combatant.service';
import { CombatEntryComponent } from './../combat-entry/combat-entry.component';

@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.css'],
})
export class CombatListComponent implements OnInit {
  @Output() combatants: Combatant[] = this.combatantService.combatantsArray;

  constructor(public combatantService: CombatantService) {}

  ngOnInit(): void {
    console.log('LOGGER: ngOnInit(), combat-list.component');
  }
}
