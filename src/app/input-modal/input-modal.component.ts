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

  onCancelModal(): void {
    console.log('LOGGER: onCloseModal(), input-modal.component');
    this.functionService.closeModal();
  }

  onSubmitModal(nameInput: any, scoreInput: any, acInput: any): void {
    console.log('hey joe', nameInput.value, scoreInput.value, acInput.value);
    this.combatantService.createCombatant(
      nameInput.value,
      scoreInput.value,
      acInput.value,
      this.functionService.combatantType,
      this.functionService.modalColor
    );
    this.functionService.closeModal();
  }
}
