import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AlbumGuard, AlbumsGuardsModule } from "@ziphr-task/albums/guards";

import { AlbumPageComponent } from "./album-page/album-page.component";
import { AlbumPageModule } from "./album-page/album-page.module";
import { AlbumsPageComponent } from "./albums-page.component";

const routes: Routes = [
  {
    path: '',
    component: AlbumsPageComponent
  },
  {
    path: ':id',
    component: AlbumPageComponent,
    canActivate: [AlbumGuard]
  }
]

@NgModule({
  imports: [
    AlbumsGuardsModule,
    RouterModule.forChild(routes),
    AlbumPageModule
  ],
  exports: [RouterModule]
})
export class AlbumsPageRoutingModule { }
