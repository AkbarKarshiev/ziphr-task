import { NgModule } from '@angular/core';

import { PhotosApiService } from "./photos-api.service";

@NgModule({
  providers: [PhotosApiService]
})
export class PhotosApiModule {}
