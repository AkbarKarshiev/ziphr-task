import { NgModule } from '@angular/core';

import { AlbumsApiService } from "./albums-api.service";

@NgModule({
  providers: [AlbumsApiService]
})
export class AlbumsApiModule {}
