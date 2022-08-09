import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FunctionService } from '../function.service';
import { CombatantService } from '../combatant.service';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css'],
})
export class InputModalComponent implements OnInit {
  constructor(
    public functionService: FunctionService,
    public combatantService: CombatantService
  ) {}

  ngOnInit(): void {}

  onCancelModal(): void {
    console.log('LOGGER: onCloseModal(), input-modal.component');
    this.functionService.closeModal();
  }

  onSubmitNewCombatant(combatantCreationForm: NgForm): void {
    console.log('LOGGER: onSubmitModal(), input-modal.component');
    this.combatantService.createCombatant(
      combatantCreationForm.value.combatantName,
      combatantCreationForm.value.combatantScore,
      this.functionService.combatantType,
      this.functionService.modalColor
    );
    this.functionService.closeModal();
  }
}
