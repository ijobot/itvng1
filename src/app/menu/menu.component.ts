import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../function.service';
import { CombatantService } from '../combatant.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    public functionService: FunctionService,
    public combatantService: CombatantService
  ) {}

  ngOnInit(): void {}
}
