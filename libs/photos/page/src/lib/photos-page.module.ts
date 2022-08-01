import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { CardPhotosListModule } from "@ziphr-task/ui/card-photos-list";

import { PhotosPageComponent } from './photos-page.component';
import { PhotosPageRoutingModule } from "./photos-page-routing.module";

@NgModule({
  imports: [CommonModule, PhotosPageRoutingModule, NgbPaginationModule, CardPhotosListModule],
  declarations: [PhotosPageComponent],
})
export class PhotosPageModule {}
