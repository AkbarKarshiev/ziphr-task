import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { CardPhotosListModule } from "@ziphr-task/ui/card-photos-list";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PhotosPageComponent } from './photos-page.component';
import { PhotosPageRoutingModule } from "./photos-page-routing.module";

@NgModule({
  imports: [CommonModule, PhotosPageRoutingModule, NgbPaginationModule, CardPhotosListModule, BreadcrumbModule],
  declarations: [PhotosPageComponent],
})
export class PhotosPageModule {}
