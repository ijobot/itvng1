import { Component, Input } from '@angular/core';
import { FunctionService } from './function.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public functionService: FunctionService) {}
}
