import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalAlbumsListComponent } from './vertical-albums-list.component';
import { VerticalAlbumsListItemModule } from "./components/vertical-albums-list-item/vertical-albums-list-item.module";

@NgModule({
  imports: [CommonModule, VerticalAlbumsListItemModule],
  declarations: [VerticalAlbumsListComponent],
  exports: [VerticalAlbumsListComponent]
})
export class VerticalAlbumsListModule {}
