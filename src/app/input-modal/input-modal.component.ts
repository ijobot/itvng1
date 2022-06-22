import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css'],
})
export class InputModalComponent implements OnInit {
  constructor(public functionService: FunctionsService) {}

  ngOnInit(): void {}

  onCloseModal(): void {
    this.functionService.showInputModal = false;
  }
}
