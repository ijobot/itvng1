import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FunctionService } from '../function.service';
import { CombatantService } from '../combatant.service';
import { Combatant } from '../combatant';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

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

  makeName(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// Added random character and number generation for quicker testing. 

  onSubmitModal(nameInput: any, scoreInput: any, acInput: any): void {
    console.log('hey joe', nameInput.value, scoreInput.value, acInput.value, 'if this is empty; no values were added');
      this.combatantService.createCombatant(
      nameInput = this.makeName(Math.floor(Math.random() * 6 + 1),),
      scoreInput = Math.floor(Math.random() * 30 + 1),
      acInput = Math.floor(Math.random() * 10),
      this.functionService.combatantType,
      this.functionService.modalColor
    );
    this.functionService.closeModal();
  }
}
