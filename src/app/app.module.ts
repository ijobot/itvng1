import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { CombatListComponent } from './combat-list/combat-list.component';
import { InputModalComponent } from './input-modal/input-modal.component';
import { DropDownNameComponent } from './drop-down-name/drop-down-name.component';
import { DropDownTypeComponent } from './drop-down-type/drop-down-type.component';
import { DropDownScoreComponent } from './drop-down-score/drop-down-score.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuComponent,
    CombatListComponent,
    InputModalComponent,
    DropDownNameComponent,
    DropDownTypeComponent,
    DropDownScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
