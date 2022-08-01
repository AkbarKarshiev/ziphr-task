import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { AlbumPageModule } from "./album-page/album-page.module";

import { AlbumsPageComponent } from "./albums-page.component";
import { AlbumPageComponent } from "./album-page/album-page.component";

const routes: Routes = [
  {
    path: '',
    component: AlbumsPageComponent
  },
  {
    path: ':id',
    component: AlbumPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), AlbumPageModule],
  exports: [RouterModule]
})
export class AlbumsPageRoutingModule { }
