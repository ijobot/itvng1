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

  observer = {
    next: (value:any) => { console.log("Observer got a got a value of " + value)}
  , error: (err:any) => { console.log("Observer got a got a value of " + err)}
  }
    //We want to subscribe to the CombatantService Combatant Observer to list out the combatants. Stuggling to do this. this.combatantService.subscribe(value = this.combatants)

  // @Output() combatants: Combatant[] = this.combatantService.combatantsArray;

  observable = this.combatantService.observable.subscribe();

  @Output() combatants: Combatant[] = this.observable;

  constructor(public combatantService: CombatantService) {}


  ngOnInit(): void {
    console.log('LOGGER: ngOnInit(), combat-list.component');
    this.combatantService.observable.subscribe((val:any) => {
      console.log(val.next)
    });
    console.log(this.observable)
    console.log(this.observer)
  }
}