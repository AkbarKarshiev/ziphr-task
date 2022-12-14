import { NgModule } from '@angular/core';

import { AlbumsServicesModule } from "@ziphr-task/albums/services";
import { AlbumsTableModule } from "@ziphr-task/albums/ui/albums-table";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { AlbumsPageComponent } from './albums-page.component';
import { AlbumsPageRoutingModule } from "./albums-page-routing.module";

@NgModule({
  imports: [
    AlbumsPageRoutingModule,
    BreadcrumbModule,
    AlbumsTableModule,
    AlbumsServicesModule
  ],
  declarations: [AlbumsPageComponent],
})
export class AlbumsPageModule {}
