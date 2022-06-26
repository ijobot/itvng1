import { Injectable } from '@angular/core';
import { Combatant } from './combatant';
import { InputModalComponent } from './input-modal/input-modal.component';
import { CombatantService } from './combatant.service';

@Injectable({
  providedIn: 'root',
})
export class FunctionService {
  public showInputModal: boolean = false;
  public modalColor: string = 'purple';
  public combatantType: string = 'testType';

  constructor(public combatantService: CombatantService) {}

  openModalWithPresets(color: string, type: string): void {
    console.log('LOGGER: openModalWithPresetValues(), function.service');
    this.showInputModal = true;
    this.modalColor = color;
    this.combatantType = type;
  }

  closeModal(): void {
    console.log('LOGGER: closeModal(), function.service');
    this.showInputModal = false;
  }
}
