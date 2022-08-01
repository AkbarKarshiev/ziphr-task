import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsListComponent } from './albums-list.component';
import { AlbumListItemModule } from "./components/album-list-item/album-list-item.module";

@NgModule({
  imports: [CommonModule, AlbumListItemModule],
  declarations: [AlbumsListComponent],
  exports: [AlbumsListComponent]
})
export class AlbumsListModule {}
