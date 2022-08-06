import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PhotoGuard, PhotosGuardsModule } from "@ziphr-task/photos/guards";

import { PhotoPageComponent } from "./photo-page/photo-page.component";
import { PhotoPageModule } from "./photo-page/photo-page.module";
import { PhotosPageComponent } from "./photos-page.component";

const routes: Routes = [
  {
    path: '',
    component: PhotosPageComponent
  },
  {
    path: ':id',
    component: PhotoPageComponent,
    canActivate: [PhotoGuard]
  }
]

@NgModule({
  imports: [
    PhotosGuardsModule,
    PhotoPageModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PhotosPageRoutingModule { }
