import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VerticalAlbumsListItemModule } from "./components/vertical-albums-list-item/vertical-albums-list-item.module";
import { VerticalAlbumsListComponent } from './vertical-albums-list.component';

@NgModule({
  imports: [CommonModule, VerticalAlbumsListItemModule],
  declarations: [VerticalAlbumsListComponent],
  exports: [VerticalAlbumsListComponent]
})
export class VerticalAlbumsListModule {}
