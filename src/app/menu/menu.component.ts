import { Component, OnInit } from '@angular/core';
import { FunctionsService } from './../functions.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(public functionService: FunctionsService) {}

  ngOnInit(): void {}
}
