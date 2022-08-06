import { NgModule } from '@angular/core';

import { PhotoGuard } from "./photo.guard";

@NgModule({
  providers: [PhotoGuard]
})
export class PhotosGuardsModule {}
