import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FunctionsService } from '../functions.service';
import { CombatantsService } from '../combatants.service';
import { Combatant } from '../combatant';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css'],
})
export class InputModalComponent implements OnInit {
  constructor(public functionService: FunctionsService, public combatantsService: CombatantsService) {}

  ngOnInit(): void {}

  sortCombatantList(): void {
    this.combatantsService.combatantsArray.sort((a, b) => {
      console.log('LOGGER: sortCombatantList() Function Fired!')
      return b.score - a.score
    })
  }

  pushCombatantData(): void {
    console.log('LOGGER: pushCombatantData() Triggered')
    this.combatantsService.combatantsArray.push({
      name: 'Joe',
      type: 'Player',
      score: 15,
      color: 'green',
      ac: 14} as Combatant,
      {
        name: 'Jack',
        type: 'Player',
        score: 18,
        color: 'green',
        ac: 16,
      } as Combatant
    )
    console.log('LOGGER: combatantsArray[0] =' + this.combatantsService.combatantsArray[0].name)
    console.log('LOGGER: combatantsArray[1] =' + this.combatantsService.combatantsArray[1].name)
    this.sortCombatantList()
    console.log('LOGGER: POST SORT: combatantsArray[0] =' + this.combatantsService.combatantsArray[0].name)
    console.log('LOGGER: POST SORT: combatantsArray[1] =' + this.combatantsService.combatantsArray[1].name)
  }



  onCloseModal(): void {
    console.log('LOGGER: onCloseModal(), input-modal.component');
    this.functionService.showInputModal = false;
    console.log('LOGGER: onCloseModal() Triggered')
    this.pushCombatantData()
  }
}
