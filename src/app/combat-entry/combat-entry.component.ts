import { Component, Input, OnInit } from '@angular/core';
import { CombatantService } from './../combatant.service';
import { Combatant } from '../combatant';

@Component({
  selector: 'app-combat-entry',
  templateUrl: './combat-entry.component.html',
  styleUrls: ['./combat-entry.component.css'],
})
export class CombatEntryComponent implements OnInit {
  @Input() combatant: Combatant = {
    name: '',
    score: Math.random(),
    type: '',
    color: '',
  };
  constructor(public combatantService: CombatantService) {}

  ngOnInit(): void {}

  onClick(): void {}
}
