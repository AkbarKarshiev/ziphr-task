import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardPhotosListComponent } from './card-photos-list.component';
import { CardPhotosListItemModule } from "./components/card-photos-list-item/card-photos-list-item.module";

@NgModule({
  imports: [CommonModule, CardPhotosListItemModule],
  declarations: [CardPhotosListComponent],
  exports: [CardPhotosListComponent]
})
export class CardPhotosListModule {}
