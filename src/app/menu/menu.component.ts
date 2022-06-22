import { Component, OnInit } from '@angular/core';
import { FunctionsService } from './../functions.service';
import { CombatantsService } from '../combatants.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(public functionService: FunctionsService, public combatantsService: CombatantsService) {}

  // callTest(): void {
  //   console.log(this.combatantsService.combatantsArray[0].name)
  // }

  ngOnInit(): void {}
}
