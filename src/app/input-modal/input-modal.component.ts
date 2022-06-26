import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FunctionService } from '../function.service';
import { CombatantService } from '../combatant.service';
import { Combatant } from '../combatant';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css'],
})
export class InputModalComponent implements OnInit {
  @Input() modalColor = this.functionService.modalColor;
  constructor(
    public functionService: FunctionService,
    public combatantService: CombatantService
  ) {}

  ngOnInit(): void {}

  onCloseModal(): void {
    console.log('LOGGER: onCloseModal(), input-modal.component');
    this.combatantService.pushCombatantData();
    this.functionService.showInputModal = false;
  }
}
