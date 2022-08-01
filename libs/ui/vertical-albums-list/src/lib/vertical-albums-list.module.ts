import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalAlbumsListComponent } from './vertical-albums-list.component';
import { VerticalAlbumsListItemComponent } from './components/vertical-albums-list-item/vertical-albums-list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VerticalAlbumsListComponent, VerticalAlbumsListItemComponent],
})
export class VerticalAlbumsListModule {}
