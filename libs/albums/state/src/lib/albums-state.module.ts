import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AlbumsApiModule } from "@ziphr-task/albums/api";

import { AlbumsEffects } from './albums.effects';
import { AlbumsFacade } from './albums.facade';
import * as fromAlbums from './albums.reducer';

export function metaServiceFactory(albumsFacade: AlbumsFacade): () => void {
  return (): void => albumsFacade.load();
}

@NgModule({
  imports: [AlbumsApiModule, StoreModule.forFeature(fromAlbums.ALBUMS_FEATURE_KEY, fromAlbums.albumsReducer), EffectsModule.forFeature([AlbumsEffects])],
  providers: [
    AlbumsFacade,
    {
      provide: APP_INITIALIZER,
      useFactory: metaServiceFactory,
      deps: [AlbumsFacade],
      multi: true
    }
  ],
})
export class AlbumsStateModule {}
