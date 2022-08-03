import { APP_INITIALIZER, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PhotosApiModule } from "@ziphr-task/photos/api";

import * as fromPhotos from './photos.reducer';
import { PhotosEffects } from './photos.effects';
import { PhotosFacade } from './photos.facade';

export function metaServiceFactory(photosFacade: PhotosFacade): () => void {
  return (): void => photosFacade.load();
}

@NgModule({
  imports: [
    PhotosApiModule,
    StoreModule.forFeature(fromPhotos.PHOTOS_FEATURE_KEY, fromPhotos.photosReducer),
    EffectsModule.forFeature([PhotosEffects])
  ],
  providers: [
    PhotosFacade,
    {
      provide: APP_INITIALIZER,
      useFactory: metaServiceFactory,
      deps: [PhotosFacade],
      multi: true
    }
  ],
})
export class PhotosStateModule {}
