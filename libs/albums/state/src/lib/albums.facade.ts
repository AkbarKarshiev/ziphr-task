import { Injectable } from '@angular/core';
import { Actions } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { filter, switchMap } from "rxjs";

import * as AlbumsActions from './albums.actions';
import * as AlbumsSelectors from './albums.selectors';

@Injectable()
export class AlbumsFacade {
  loaded$ = this.store.select(AlbumsSelectors.selectAlbumsLoaded);

  albums$ = this.store.select(AlbumsSelectors.selectAlbums);

  albumsCount$ = this.store.select(AlbumsSelectors.selectAlbumsCount)

  albumsEntities$ = this.store.select(AlbumsSelectors.selectAlbumsEntities);

  albumById$ = (id: string) => this.store.select(AlbumsSelectors.selectAlbum(id));

  albumByIdLoaded$ = (id: string) =>
    this.albums$.pipe(
      filter((albums) => albums?.length > 0),
      switchMap(() => this.store.select(AlbumsSelectors.selectAlbum(id)))
    );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  load() {
    this.store.dispatch(AlbumsActions.load());
  }
}
