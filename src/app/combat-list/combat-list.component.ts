import { Component, OnInit, Output } from '@angular/core';
import { Combatant } from '../combatant';
import { CombatantService } from '../combatant.service';
import { CombatEntryComponent } from './../combat-entry/combat-entry.component';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.css'],
})

export class CombatListComponent implements OnInit {


  

    //We want to subscribe to the CombatantService Combatant Observer to list out the combatants. Stuggling to do this. this.combatantService.subscribe(value = this.combatants)

  @Output() combatants: Combatant[] = this.combatantService.combatantsArray;

  constructor(public combatantService: CombatantService) {}


  ngOnInit(): void {
    console.log('LOGGER: ngOnInit(), combat-list.component');
    // getCombatantObservable().subscribe(value => this.combatantService.combatantsArray = value)
  }
}