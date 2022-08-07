import { NgModule } from '@angular/core';

import { PhotosServicesModule } from "@ziphr-task/photos/services";
import { PhotosTableModule } from "@ziphr-task/photos/ui/photos-table";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PhotosPageComponent } from './photos-page.component';
import { PhotosPageRoutingModule } from "./photos-page-routing.module";

@NgModule({
  imports: [
    PhotosPageRoutingModule,
    BreadcrumbModule,
    PhotosTableModule,
    PhotosServicesModule
  ],
  declarations: [PhotosPageComponent],
})
export class PhotosPageModule {}
