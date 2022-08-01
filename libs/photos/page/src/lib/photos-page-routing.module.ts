import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PhotoPageModule } from "./photo-page/photo-page.module";

import { PhotosPageComponent } from "./photos-page.component";
import { PhotoPageComponent } from "./photo-page/photo-page.component";

const routes: Routes = [
  {
    path: '',
    component: PhotosPageComponent
  },
  {
    path: ':id',
    component: PhotoPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), PhotoPageModule],
  exports: [RouterModule]
})
export class PhotosPageRoutingModule { }
