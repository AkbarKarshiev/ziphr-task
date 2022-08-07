import { NgModule } from '@angular/core';

import { AlbumPhotosService } from "./album-photos.service";
import { AlbumsService } from "./albums.service";

@NgModule({
  providers: [AlbumsService, AlbumPhotosService]
})
export class AlbumsServicesModule {}
