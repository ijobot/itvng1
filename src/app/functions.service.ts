import { Injectable } from '@angular/core';
import { Combatant } from './combatant';
import { InputModalComponent } from './input-modal/input-modal.component';

@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  public showInputModal: boolean = false;
  public modalColor: string = '';
  public combatantType: string = '';
  public combatant: Combatant = new Combatant('', 0, '', '', 0);

  constructor() {}

  openModalWithPresetValues(): void {
    console.log('LOGGER: openModalWithPresetValues()');
    this.showInputModal = true;
  }
}
