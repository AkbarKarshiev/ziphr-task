import { NgModule } from '@angular/core';

import { AlbumGuard } from "./album.guard";

@NgModule({
  providers: [AlbumGuard]
})
export class AlbumsGuardsModule {}
